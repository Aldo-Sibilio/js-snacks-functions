/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function contaVocali(parola) {
  let count = 0;

  for (let i = 0; i < parola.length; i++) {
    const lettera = parola[i];

    // controllo ogni vocale separatamente
    if (lettera === 'a') {
      count++;
    }

    if (lettera === 'e') {
      count++;
    }

    if (lettera === 'i') {
      count++;
    }

    if (lettera === 'o') {
      count++;
    }

    if (lettera === 'u') {
      count++;
    }
  }

  return count;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(contaVocali(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)