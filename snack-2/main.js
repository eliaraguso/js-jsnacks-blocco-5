// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm
// Infine stampa separatamente quanto pesano i due gruppi di zucchine

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


let minoriUguali15 = [];

let over15 = [];


let pesoTotaleCorte = 0;
let pesoTotaleLunghe = 0;



for (let i = 0; i < zucchine.length; i++) {
    
    if (zucchine[i]["lunghezza"] <= 15) {
        
        minoriUguali15.push(zucchine[i]["varieta"]);
        pesoTotaleCorte += zucchine[i]["peso"]

    } else if (zucchine[i]["lunghezza"] > 15) {

        over15.push(zucchine[i]["varieta"]);
        pesoTotaleLunghe += zucchine[i]["peso"]


    } 
    
}







alert("Le zucchine minori o uguali a 15 cm sono: " + minoriUguali15 + " " + "e il loro peso totale è:" + " " + pesoTotaleCorte + " " + "grammi");
alert("Le zucchine maggiori di 15 cm sono: " + over15 + " " + "e il loro peso totale è:" + " " + pesoTotaleLunghe + " " + "grammi");

