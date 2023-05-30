/* -----------------------------------------
! DEBUG
-------------------------------------------*/
console.log('----------- DEBUG -----------');

console.log('JS OK!');// Check if JS is linked to the page


/* -----------------------------------------
* INIT
-------------------------------------------*/
console.log('----------- INIT -----------');


// *** DOM ELEMENTS ***//
// Controls Bar
const controlsBarElem = document.getElementById('controls-bar');
const fizzDividerElem = document.getElementById('fizz-divider');
const buzzDividerElem =  document.getElementById('buzz-divider');
const maxNumberElem =  document.getElementById('max-number');
const generateElem =  document.getElementById('controls-generate');
const resetElem =  document.getElementById('controls-reset');
// Deck Container
const deckElem = document.getElementById('deck');

// ! Log Elements
console.log('');
console.log('# DOM Elements:');
console.log('Container: ' + controlsBarElem);
console.log('Fizz Divider: ' + fizzDividerElem);
console.log('Buzz Divider: ' + buzzDividerElem);
console.log('Max Number: ' + maxNumberElem);
console.log('Generate Button: ' + generateElem);
console.log('Reset Button: ' + resetElem);
console.log('Deck Container: ' + deckElem);


/* -----------------------------------------
* LOGIC
-------------------------------------------*/
console.log('----------- LOGIC -----------');


// *** GENERATE BUTTON CLICK ***//
generateElem.addEventListener('click', function(){

    // *** GET PARAMETERS ***//
    // Dividers
    const fizzDividerValue = parseInt(fizzDividerElem.value);
    const buzzDividerValue = parseInt(buzzDividerElem.value);
    // max Number
    const maxNumberValue = parseInt(maxNumberElem.value);

    // ! Log Parameters
    console.log('');
    console.log('# Parameters:');
    console.log('Fizz Divider: ' + fizzDividerValue);
    console.log('Buzz Divider: ' + buzzDividerValue);
    console.log('Max Numbers: ' + maxNumberValue);

    // *** VALIDATION ***//


    // ! Log List
    console.log('');
    console.log("# Fizz Buzz List:");

    // *** CREATE CARDS ***//
    let cards = '';

    for (let i = 1; i <= maxNumberValue; i++) {
        
        let currentValue = i;
        let bgClass = 'bg-blue animate flip';

        // *** CHECK FIZZBUZZ DIVIDERS ***//
        // FizzBuzz Check
        if(!(currentValue % fizzDividerValue) && !(currentValue % buzzDividerValue)) {

            currentValue = 'FizzBuzz';
            bgClass = 'bg-red animate spin-scale';

        } // Fizz Check 
        else if(!(currentValue % fizzDividerValue)) {

            currentValue = 'Fizz';
            bgClass = 'bg-green animate spin';

        } // Buzz Check
        else if(!(currentValue % buzzDividerValue)) {

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


    console.log('----------- GENERATE DONE -----------');
});

