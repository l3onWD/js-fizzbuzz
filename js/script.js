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
const controlsTogglerElem = document.querySelector('.controls-toggler');
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
console.log('Toggler: ' + controlsTogglerElem);
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

// *** GENERATE STARTING CARDS ***//
generateCards();


// *** CLICK GENERATE BUTTON ***//
generateElem.addEventListener('click', generateCards);


// *** CLICK TOGGLER BUTTON ***//
controlsTogglerElem.addEventListener('click', function() {

    // *** SHOW CONTROLS BAR ***//
    controlsBarElem.classList.toggle('is-open');

    console.log('----------- TOGGLING DONE -----------');
});


// *** CLICK RESET BUTTON ***//
resetElem.addEventListener('click', function(){

    // *** RESET INPUTS ***//
    // Reset to default
    fizzDividerElem.value = '3';
    buzzDividerElem.value =  '5';
    maxNumberElem.value =  '100';

    // Remove cards
    deckElem.innerHTML = '';

    console.log('----------- RESET DONE -----------');
});


/* -----------------------------------------
* FUNCTIONS
-------------------------------------------*/

function generateCards() {

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
    let isValid = true;

    // Reset validation style
    fizzDividerElem.classList.remove('is-invalid');
    buzzDividerElem.classList.remove('is-invalid');
    maxNumberElem.classList.remove('is-invalid');

    // Check Fizz Divider
    if (isNaN(fizzDividerValue) || fizzDividerValue < 1) {
        isValid = false;
        fizzDividerElem.classList.add('is-invalid');
    }

    // Check Buzz Divider
    if (isNaN(buzzDividerValue) || buzzDividerValue < 1) {
        isValid = false;
        buzzDividerElem.classList.add('is-invalid');
    }

    // Check Max Number
    if (isNaN(maxNumberValue) || maxNumberValue < 1) {
        isValid = false;
        maxNumberElem.classList.add('is-invalid');
    }

    // Terminate control
    if(!isValid) {
        return;
    }


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
        console.log(currentValue);

    }


    // *** INSERT CARDS ***//
    deckElem.innerHTML = cards;


    // *** HIDE CONTROLS BAR ***//
    controlsBarElem.classList.remove('is-open');


    console.log('----------- GENERATE DONE -----------');
}