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
let insertOk = true;

const km = parseInt(prompt("Inserisci il numero dei chilometri del tuo viaggio"));
if (isNaN(km)){
  alert("Inserire un numero per la distanza");
  insertOk = false;
}

const age = parseInt(prompt("Inserisci la tua età"));
if (isNaN(age)){
  alert("Inserire un numero per l\'età");
  insertOk = false;
}


let output;


if(insertOk === true){

  const priceKm = 0.21;

  let priceTicket = (priceKm * km);

  
  if (age < 18){
    priceTicket *= .8; // Prezzo biglietto minorenni ==  priceTicket = (priceKm * km) * 0.8;
  }else if (age > 65){
    priceTicket *= .6; // Prezzo biglietto anziani == priceTicket = (priceKm * km) * 0.6;
  }


  console.log("prezzo biglietto",priceTicket)

  const output = 
  `
  Il prezzo del tuo biglietto è di: ${priceTicket.toFixed(2)} euro.
  `;
}else{
  output = ("Inserire i dati corretti!")
}


document.getElementById("price-ticket").innerHTML = output;

