//holding DOM elements
const machineEl = document.getElementById('crocs-machine')
const cashBtn = document.getElementById('cash-out')
const playBtn = document.getElementById('play-game')
let wagerInput = document.querySelector('input').value
let playerBalance = document.getElementById('money').textContent




//Creates Game
playGame = () => {
const images = [
    'img/crocscamo.png',
    'img/crocsorg.jpg',
    'img/crocsred.jpg'
];

const camo = images[0];
const orange = images[1];
const red = images[2];

//Fisher Yates Array Shuffle
function printArray (arr)
    {
        let ans = '';
        for (let i = 0; i < arr.length; i++)
        {
            ans += arr[i] + ''
        }
    }

function randomize (arr)
    {
        for (let i=arr.length - 1; i > 0; i--)
        {
            let j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

let arr = [camo, red, orange, orange, camo, red, red, camo, orange];
randomize(arr);
printArray(arr);
let slotArray = (arr)

//Pushes Random Img to slot
let slotOne = slotArray[0]
let slotTwo = slotArray[1]
let slotThree = slotArray[2]
document.querySelector('#slot-one').src = slotOne;
document.querySelector('#slot-two').src = slotTwo;
document.querySelector('#slot-three').src = slotThree;
}
 




//Scoring Logic
winEvent = () => {
    if (playerBalance > 0) {
        playerBalance = 500;
    if (slotOne == camo && slotTwo == camo && slotTwo == camo) {
        playerBalance += wagerInput * 5;
    } else if (slotArray[0] == orange && slotArray[1] == orange && slotArray[2] == orange) {
        playerBalance += wagerInput * 3;
    } else if (slotArray[0] == red && slotArray[1] == red && slotArray[2] == red) {
        playerBalance += wagerInput * 2;
    } else {
         playerBalance * 5;
    }
    document.getElementById("money").innerHTML = playerBalance.toFixed(2);
    }
    else 
        alert ('You Are Out Of Cash!')
        
}



playBtn.addEventListener('click', playGame, )
console.log(playerBalance)