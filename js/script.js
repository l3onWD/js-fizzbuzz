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
    let bgClass = 'bg-blue';

    // *** CHECK FIZZBUZZ DIVIDERS ***//
    // FizzBuzz Check
    if(!(currentValue % fizzDivider) && !(currentValue % buzzDivider)) {

        currentValue = 'FizzBuzz';
        bgClass = 'bg-red';

    } // Fizz Check 
    else if(!(currentValue % fizzDivider)) {

        currentValue = 'Fizz';
        bgClass = 'bg-green';

    } // Buzz Check
    else if(!(currentValue % buzzDivider)) {

        currentValue = 'Buzz';
        bgClass = 'bg-yellow';

    }


    // *** SAVE RESULT ***//
    cards += `<div class="card ${bgClass}">${currentValue}</div>`;
    
    // ! Log Result
    console.log(currentValue);

}


// *** INSERT CARDS ***//
deckElem.innerHTML = cards;


console.log('----------- DONE -----------');
