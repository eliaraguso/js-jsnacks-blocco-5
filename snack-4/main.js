// Scrivi una funzione che fonda due array (aventi lo stesso numero di
//     elementi) prendendo alternativamente gli elementi da uno e dall’altro
//     es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

let array1 = ["a","b","c"];
let array2 = [1,2,3];
let finalArray = [];



function myFunction (arr1, arr2) {

    for(i=0; i < array1.length; i++) {
        finalArray.push(array1[i]);
        finalArray.push(array2[i]);
    }

    return finalArray;
}

let risultato = myFunction(array1, array2);

console.log(risultato);