//console.log("Funzioni?");

/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto. */

//Preparazione
/* - Prompt per far scegliere all'utente pari o dispari;
   - Prompt per far scegliere all'utente un numero da 1 a 5;
   - Funzione per generare numero random del pc;
   - Sommare i due numeri;
   - Definire somma pari o dispari;
   - Dichiarare vincitore. 
 */

   let userOddOrEven = prompt("Scegli tra pari o dispari:");
   if (userOddOrEven === "pari"){
    alert("Hai scelto pari!");
   } else if (userOddOrEven === "dispari"){
    alert("Hai scelto dispari!");
   } else {
    alert("Scelta non valida, scegli tra pari o dispari:")
   }   console.log(userOddOrEven);

   let userNumber = Number(prompt("Scegli un numero tra 1 e 5:"));
    console.log(userNumber);
    alert("Hai scelto " + userNumber);

    function randomPcNumber(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
    }

    let pcNumber = randomPcNumber(1, 6)
    console.log(pcNumber);
    alert("Il numero casuale per il pc è " + pcNumber);

    let sum = userNumber + pcNumber;
    console.log(sum);
    
    
