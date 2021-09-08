// Crea un array di 10 oggetti che rappresentano una zucchina, indicando
// per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

let zucchine = [
    {
        "varieta" : "varieta 1",
        "peso" : 150,
        "lunghezza" : 20
    },
    {
        "varieta" : "varieta 2",
        "peso" : 140,
        "lunghezza" : 19
    },
    {
        "varieta" : "varieta 3",
        "peso" : 130,
        "lunghezza" : 18
    },
    {
        "varieta" : "varieta 4",
        "peso" : 120,
        "lunghezza" : 17
    },
    {
        "varieta" : "varieta 5",
        "peso" : 110,
        "lunghezza" : 16
    },
    {
        "varieta" : "varieta 6",
        "peso" : 100,
        "lunghezza" : 15
    },
    {
        "varieta" : "varieta 7",
        "peso" : 90,
        "lunghezza" : 14
    },
    {
        "varieta" : "varieta 8",
        "peso" : 80,
        "lunghezza" : 13
    },
    {
        "varieta" : "varieta 9",
        "peso" : 70,
        "lunghezza" : 12
    },
    {
        "varieta" : "varieta 10",
        "peso" : 60,
        "lunghezza" : 11
    },
];

let pesoTotale = 0;


    for (let i = 0; i < zucchine.length; i++) {
        
        pesoTotale += zucchine[i]["peso"];
        
    }

console.log(pesoTotale);
