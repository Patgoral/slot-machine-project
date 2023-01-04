//holding DOM elements
const machineEl = document.getElementById('crocs-machine')
const cashBtn = document.getElementById('cash-out')
const playBtn = document.getElementById('play-game')
let messageEl = document.querySelector('#message')

let playerBalance = 500
let playerWager= 0

//GAME ASSETS
const images = [
    'img/crocscamo.png',
    'img/crocsorg.jpg',
    'img/crocsred.jpg'
]

const camo = images[0]
const orange = images[1]
const red = images[2]

//HOLDS VALUES FOR SHUFFLE
let slotArray = [camo, red, orange, orange, camo, red, red, camo, orange]


const playerBalanceSpan = (document.querySelector('#money'))
playerBalanceSpan.innerHTML = playerBalance

// ALLOWING USER INPUT
const wagerSetter = function (event) {
    playerWager = event.target.value
}
const wagerInput = document.querySelector('input')
    wagerInput.addEventListener('input', wagerSetter)

//Fisher Yates Array Shuffle
const printArray = function (arr)
    {
        let ans = '';
        for (let i = 0; i < arr.length; i++)
        {
            ans += arr[i] + ''
        }
    }

const randomize = function (arr)
    {
        for (let i=arr.length - 1; i > 0; i--)
        {
            let j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }


//Scoring Logic
winEvent = () => {

// Pushes Random Img to slot
let slotOne = slotArray[0]
let slotTwo = slotArray[1]
let slotThree = slotArray[2]
document.querySelector('#slot-one').src = slotOne
document.querySelector('#slot-two').src = slotTwo
document.querySelector('#slot-three').src = slotThree

const playerBalanceSpan = (document.querySelector('#money'))
playerBalanceSpan.innerHTML = playerBalance

printArray(slotArray)
    randomize(slotArray)

   if (playerWager > playerBalance) {
    messageEl.innerText = "Insufficient Funds"
    return playerBalance
   }

    if (slotOne === camo && slotTwo === camo && slotThree === camo) {
        playerBalance += playerWager * 5;
        messageEl.innerText = "JACKPOT! 5X MULTIPLIER!"
        return playerBalance
    } else if (slotOne == orange && slotTwo == orange && slotThree == orange) {
        playerBalance += playerWager * 3;
        messageEl.innerText = "YOU WON! 3X MULTIPLIER!"
        return playerBalance
    } else if (slotOne == red && slotTwo == red && slotThree == red) {
        playerBalance += playerWager * 2
        messageEl.innerText = "YOU WON! 2X MULTIPLIER"
        return playerBalance
    } else if (playerBalance <= 0) {
        messageEl.innerText = "Game Over! Cash Out to Play Again!"
        playBtn.disabled = true
        playerBalance = "BROKE"
    }
    else {
         playerBalance -= playerWager
         messageEl.innerText = "YOU LOST! Try Again!"
         return playerBalance
        }
    
}

playGame = () => {
    winEvent()
}

gameReset = () => {
    playerBalance = 500
}

 
playBtn.addEventListener('click', playGame)

cashBtn.addEventListener('click', gameReset)

console.log(cashBtn)

