// Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)


// function reverseString (string){
    
//     // uso il metodo split per creare un array composto dalle lettere della mia stringa
//      var splitString = string.split("")
     
  
//     //  uso il metodo reverse per invertire gli elementi dell'array "splitString"
//      var reverseArray = splitString.reverse();
     

//     //  uso il metodo join per unire gli elementi dell'array "reverseArray" trasformando l'array in una stringa
//      var joinArray = reverseArray.join(""); 
    
     
//     //  faccio ritornare la stringa iniziale girata
//      return joinArray; 
// }

function reverseString(string) {
    
    var newString = "";
 

    for (var i = string.length - 1; i >= 0; i--) { 
        newString += string[i];
    }
    
    return newString; 
}
 
reverseString('hello');

let parolaUtente = (prompt("Inserisci una parola"))

let parolaGirata = reverseString(parolaUtente);



alert("Hai inserito la parola" + " " + parolaUtente);

alert("Guarda come ti giro la parola:" + " " + parolaGirata);

