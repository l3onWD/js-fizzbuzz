# Fizz Buzz

<br>

## Steps
- [bonus 1] Recupero il contenitore nel DOM
- [bonus 1] Creo una variabile per l'elenco dei numeri vuoto
- **FINCHE** _"contando da 1 (incluso) non ho superato il numero 100 (incluso)"_
    - Prendo temporaneamente il numero corrente
    - **SE** _"il numero corrente diviso 3 non da resto"_ **E** _"il numero corrente diviso 5 non da resto"_
        - Sovrascrivo il numero con la parola "FizzBuzz"
        - [bonus 2] Aggiungo la classe per il FizzBuzz
    - **SE INVECE** _"il numero corrente diviso 3 non da resto"_
        - Sovrascrivo il numero con la parola "Fizz"
        - [bonus 2] Aggiungo la classe per il Fizz
    - **SE INVECE** _"il numero corrente diviso 5 non da resto"_
        - Sovrascrivo il numero con la parola "Buzz"
        - [bonus 2] Aggiungo la classe per il Buzz
    - Stampo il risultato
    - [bonus 1] Aggiungo alla variabile dei numeri il risultato corrente
- [bonus 1] Aggiungo la variabile dei numeri al contenitore del DOM