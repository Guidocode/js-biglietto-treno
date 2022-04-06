/* calcolo del prezzo del biglietto del treno
 Secondo le seguenti condizioni:
    Prezzo biglietto = 0.21£/km
    Pb minorenni = Pb - 20%
    Pb anziani = Pb - 40%

 1. Richiesta numero km e età passeggero
 2. Moltiplicare i km per il prezzo al km
 3. applicare sconto (se necessario) in base all'età 
 4. Stampare il prezzo del biglietto
  
 Indicare Pb con due decimali
*/

const km = prompt("Inserisci il numero dei chilometri del tuo viaggio");
const age = prompt("Inserisci la tua età");

//const km = 30; // aggiungere prompt
//const age = 20; // aggiungere prompt
const priceKm = 0.21;

let priceTicket = (priceKm * km).toFixed(2);


// Prezzo biglietto standard
if (age > 18 && age < 65){
  priceTicket = priceKm * km; 
}else{
  priceTicket = "/";
}

console.log("prezzo biglietto standard",priceTicket)

let priceStandard = 
`
Il prezzo del tuo biglietto è di: ${priceTicket} euro.
`;

document.getElementById("standard").innerHTML = priceStandard;


// Prezzo biglietto minorenni
if (age < 18){
  priceTicket = (priceKm * km) * 0.8;
}else{
  priceTicket = "/";
}

console.log("prezzo biglietto minorenni",priceTicket)

let priceUnderage = 
`
Il prezzo del tuo biglietto è di: ${priceTicket} euro.
`;

document.getElementById("underage").innerHTML = priceUnderage;


// Prezzo biglietto anziani
if (age > 65){
  priceTicket = (priceKm * km) * 0.6;
}else{
  priceTicket = "/";
}

console.log("prezzo biglietto anziani",priceTicket)

let priceElderly = 
`
Il prezzo del tuo biglietto è di: ${priceTicket} euro.
`;

document.getElementById("elderly").innerHTML = priceElderly;


