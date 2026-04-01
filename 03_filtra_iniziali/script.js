/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function filtraPerIniziale(arrayNomi, lettera) {
  const risultato = [];

  for (let i = 0; i < arrayNomi.length; i++) {
    if (arrayNomi[i][0] === lettera) {
      risultato.push(arrayNomi[i]);
    }
  }

  return risultato;
}


// Invoca la funzione qui e stampa il risultato in console
console.log(filtraPerIniziale(names, 'A'));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]