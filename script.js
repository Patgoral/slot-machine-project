//holding DOM elements
const machineEl = document.getElementById('crocs-machine')
const cashBtn = document.getElementById('cash-out')
const playBtn = document.getElementById('play-game')
let wagerInput = document.getElementById('wager-input')
let playerBalance = document.getElementById('balance-box')

function playGame(){
const images = [
    '/img/crocscamo.png',
    '/img/crocsorg.jpg',
    '/img/crocsred.jpg'
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
randomize (arr);
printArray(arr);
let slotArray = (arr)

let slotOne = slotArray[0]
let slotTwo = slotArray[1]
let slotThree = slotArray[2]
document.querySelector('#slot-one').src = slotOne;
document.querySelector('#slot-two').src = slotTwo;
document.querySelector('#slot-three').src = slotThree;

console.log(slotArray)
console.log(slotOne)
console.log(slotTwo)
console.log(slotThree)

}


    


playBtn.addEventListener('click', playGame)
