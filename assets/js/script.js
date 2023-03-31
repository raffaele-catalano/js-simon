// const wrapper = document.querySelector('.main-wrapper')
const btnStart          = document.querySelector('button');
const numbersGiven      = 5;
const range             = 10;
const output            = document.getElementById('output');
////////////////////////////////////////////////////////////
let numbersExtracted    = [];
let numbersDigited      = [];
let rightAnswers        = [];
////////////////////////////////////////////////////////////

// click on start to begin the game or to reset it
btnStart.addEventListener('click', function() {

    start();
    
    reset();
})
















//----------FUNCTIONS----------//
/**
 * this function gives back a random number
 * @param {number} min 
 * @param {number} max 
 * @returns random number
 */
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max  - min + 1) + min);


