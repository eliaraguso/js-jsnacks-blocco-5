// Scrivi una funzione che fonda due array (aventi lo stesso numero di
//     elementi) prendendo alternativamente gli elementi da uno e dall’altro
//     es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

let array1 = ["a","b","c"];
let array2 = [1,2,3,4];
let finalArray = [];



function myFunction (arr1, arr2) {

    if (array1.length <= array2.length) {
        for(i=0; i < array1.length; i++) {
            finalArray.push(array1[i]);
            finalArray.push(array2[i]);
        }
    } else if(array1.length >= array2.length){
        for(i=0; i < array2.length; i++) {
            finalArray.push(array1[i]);
            finalArray.push(array2[i]);
        }

    }
    
    
    
    
    return finalArray;
}

let risultato = myFunction(array1, array2);

console.log(risultato);

alert("gli array di partenza sono:" + " " + array1 + " " + "e" + " " + array2);
alert("guarda come ti unisco gli array:" + " " + risultato);