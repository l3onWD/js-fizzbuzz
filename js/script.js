/*
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che
    - per i multipli di 3 stampi “Fizz” al posto del numero
    - per i multipli di 5 stampi “Buzz” al posto del numero.
    - Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.

Consigli del giorno:
    - Prima di partire a scrivere codice poniamoci qualche domanda:
        - Come faccio a sapere se un numero è divisibile per un altro?
        - Abbiamo visto qualcosa di particolare che possiamo usare?
    - Scriviamo sempre prima la scaletta in italiano per capire cosa vogliamo fare
    - Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
    - Non complichiamoci la vita con soluzioni complesse: la strada semplice è quasi sempre la migliore

BONUS 1:
    - Crea un elemento che faccia da contenitore nel DOM e poi riempilo con i tuoi elementi via JS.
    - Puoi usare varie tecniche  (template literals, innerHTML, append, ecc)

BONUS 2:
    - Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
    - Come abbiamo visto puoi  usare varie tecniche (style , className, classList)
*/

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
