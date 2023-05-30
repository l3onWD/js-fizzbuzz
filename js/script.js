/* -----------------------------------------
! DEBUG
-------------------------------------------*/
console.log('----------- DEBUG -----------');

console.log('JS OK!');// Check if JS is linked to the page


/* -----------------------------------------
* INIT
-------------------------------------------*/
console.log('----------- INIT -----------');


// *** PARAMETERS ***//
// Dividers
const fizzDivider = 3;
const buzzDivider = 5;

// Numbers
const maxNumber = 100;


// *** DOM ELEMENTS ***//
const deckElem = document.getElementById('deck');

// ! Log Parameters
console.log("# Parameters:");
console.log("Fizz Divider: " + fizzDivider);
console.log("Buzz Divider: " + buzzDivider);
console.log("Max Numbers: " + maxNumber);


// *** CONTROLS BAR ELEMENTS ***//
const controlsBarElem = document.getElementById('controls-bar');
const fizzDividerElem = document.getElementById('fizz-divider');
const buzzDividerElem =  document.getElementById('buzz-divider');
const maxNumberElem =  document.getElementById('max-number');
const generateElem =  document.getElementById('controls-generate');
const resetElem =  document.getElementById('controls-reset');

// ! Log Elements
console.log('');
console.log("# Controls Bar Elements:");
console.log("Container: " + controlsBarElem);
console.log("Fizz Divider: " + fizzDividerElem);
console.log("Buzz Divider: " + buzzDividerElem);
console.log("Max Number: " + maxNumberElem);
console.log("Generate Button: " + generateElem);
console.log("Reset Button: " + resetElem);


/* -----------------------------------------
* LOGIC
-------------------------------------------*/
console.log('----------- LOGIC -----------');

// ! Log List
console.log("# Fizz Buzz List:");


// *** CREATE CARDS ***//
let cards = '';

for (let i = 1; i <= maxNumber; i++) {
    
    let currentValue = i;
    let bgClass = 'bg-blue animate flip';

    // *** CHECK FIZZBUZZ DIVIDERS ***//
    // FizzBuzz Check
    if(!(currentValue % fizzDivider) && !(currentValue % buzzDivider)) {

        currentValue = 'FizzBuzz';
        bgClass = 'bg-red animate spin-scale';

    } // Fizz Check 
    else if(!(currentValue % fizzDivider)) {

        currentValue = 'Fizz';
        bgClass = 'bg-green animate spin';

    } // Buzz Check
    else if(!(currentValue % buzzDivider)) {

        currentValue = 'Buzz';
        bgClass = 'bg-yellow animate scale';

    }


    // *** SAVE RESULT ***//
    cards += `<div class="card ${bgClass}">${currentValue}</div>`;
    
    // ! Log Result
    //console.log(currentValue);

}


// *** INSERT CARDS ***//
deckElem.innerHTML = cards;


console.log('----------- DONE -----------');
