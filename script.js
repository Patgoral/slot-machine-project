//holding DOM elements
const playBtn = document.getElementById('play-game')
const cashBtn = document.getElementById('cash-out')
let messageEl = document.querySelector('#message')
const reels = document.querySelectorAll('.slot')
let playerBalance = 500
let playerWager = 0
const playerBalanceSpan = document.querySelector('#money')

// SOUNDS
let shuffSound = new Audio('sound/shuffle.mp3')
let lossSound = new Audio('sound/lose.mp3')
let winSound = new Audio('sound/win.mp3')
let jackpotSound = new Audio('sound/jackpot.mp3')
let errorSound = new Audio('sound/error.mp3')
let cashSound = new Audio('sound/cashout.mp3')
let gameoverSound = new Audio('sound/gameover.mp3')

//GAME ASSETS
const images = ['img/crocscamo.png', 'img/crocsorg.jpg', 'img/crocsred.jpg']

const camo = images[0]
const orange = images[1]
const red = images[2]

//HOLDS VALUES FOR SHUFFLE
let slotArray = [camo, red, orange, orange, camo, red, red, camo, orange]

// ALLOWING USER INPUT
const wagerSetter = function (event) {
	playerWager = event.target.value
}
let wagerInput = document.querySelector('input')
wagerInput.addEventListener('input', wagerSetter)

//Fisher Yates Array Shuffle
printArray = (arr) => {
	let ans = ''
	for (let i = 0; i < arr.length; i++) {
		ans += arr[i] + ''
	}
}

randomize = (arr) => {
	for (let i = arr.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1))
		;[arr[i], arr[j]] = [arr[j], arr[i]]
	}
}

// Winning Conditions
winConditions = () => {
	// Pushes Random Img to slot
	let slotOne = slotArray[0]
	let slotTwo = slotArray[1]
	let slotThree = slotArray[2]
	document.querySelector('#slot-one').src = slotOne
	document.querySelector('#slot-two').src = slotTwo
	document.querySelector('#slot-three').src = slotThree

	// WIN LOGIC
	if (slotOne === camo && slotTwo === camo && slotThree === camo) {
		playerBalance += playerWager * 5
		messageEl.innerText = 'JACKPOT! 5X MULTIPLIER!'
		jackpotSound.play()
	} else if (slotOne == orange && slotTwo == orange && slotThree == orange) {
		playerBalance += playerWager * 3
		messageEl.innerText = 'YOU WON! 3X MULTIPLIER!'
		winSound.play()
	} else if (slotOne == red && slotTwo == red && slotThree == red) {
		playerBalance += playerWager * 2
		messageEl.innerText = 'YOU WON! 2X MULTIPLIER'
		winSound.play()
	} else {
		playerBalance -= playerWager
		messageEl.innerText = 'YOU LOST! Try Again!'
		lossSound.play()
	}

	// Pushes balance after wager to HTML
	playerBalanceSpan.innerHTML = playerBalance

    //Re-enables playBtn  
	playBtn.disabled = false

    // Re-enables animation
	document.querySelector('.rotate').classList.remove('flip-horizontal-bottom')
}

//Is called after canPlay conditions are met, plays shuffle sound, 
// disables playBtn during gameplay, creates 1.6 second delay, 
// checks win conditions, prints array, and randomizes array,

playGame = () => {
	shuffSound.play()
	playBtn.disabled = true
	setTimeout(winConditions, 1600)
	printArray(slotArray)
	randomize(slotArray)
}

// Checks for zero balance, bet over balance, and zero wager.
//If it passes all three, it animates the reels, and calls playGame
canPlay = () => {
	if (playerBalance === 0) {
		messageEl.innerText = 'Game Over! Cash Out to Play Again!'
		gameoverSound.play()
		playBtn.disabled = true
	} else if (playerWager > playerBalance) {
		messageEl.innerText = 'Insufficient Funds'
		errorSound.play()
	} else if (playerWager == 0) {
		messageEl.innerText = 'Enter Wager to Play!'
		errorSound.play()
	} else {
		document.querySelector('.rotate').classList.add('flip-horizontal-bottom')
		playGame()
	}
}

//Starts Game, calls canPlay to check conditions
playBtn.addEventListener('click', canPlay)

// Resets balance to $500, enables playBtn after game over
gameReset = () => {
	playerBalance = 500
	playerBalanceSpan.innerHTML = playerBalance
	playBtn.disabled = false
	messageEl.innerText = 'Enter Your Wager & Press Play Game to Start!'
	cashSound.play()
}

//Calls game reset
cashBtn.addEventListener('click', gameReset)
