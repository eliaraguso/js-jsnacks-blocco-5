/* Scrivi una funzione che accetti tre argomenti:
un array e due numeri ("a" più piccolo di "b" e "b" grande al massimo
quanto il numero di elementi dell'array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione
compresa tra "a" e "b" */

let intialArray = ["Kenshiro", "Gianni", "Pinotto", "Agamennone", "Sandokan"];

let arrayLength = intialArray.length;

let b = parseInt(prompt("Inserisci un numero casuale con valore massimo:" + " " + arrayLength))
let a = parseInt(prompt("Inserisci un numero minore di" + " " + b))







while(b > intialArray.length) {
    let b = parseInt(prompt("Ti ho detto che il numero ha come valore massimo" + " " + intialArray.length))
} 

while(b > intialArray.length) {
    let b = parseInt(prompt("Ti ho detto che il numero ha come valore massimo" + " " + intialArray.length))
} 




function myFunction (array, num1, num2) {
    let finalArray = [];
    finalArray.push(array[num1]);
    
    return finalArray;
}