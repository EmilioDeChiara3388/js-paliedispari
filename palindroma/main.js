//console.log("Funzioni?");


/* Chiedere all’utente di inserire una parola 
Creare una funzione per capire se la parola inserita è palindroma */

//Preparazione:
/* - Prompt per inserire la parola;
   - Funzione per stabilire i parametri del dato inserito;
   - if per dare output diversi a seconda del dato (se parola inserita letta da sx a dx = se letta da dx a sx, allora è palindroma);
 */
  /*  let word = prompt("Inserisci una parola");
   let backwardWord = word.split("").reverse("").join(""); */


function isTheWordAPalindrome(){
    let word = prompt("Inserisci una parola:");
    let backwardWord = word.split("").reverse("").join("");
    let palindrom = word === backwardWord;

    console.log(word);
    console.log(backwardWord);

    return palindrom;
}

if (isTheWordAPalindrome()){
    console.log("La parola inserita è un palindromo!");
} else {
    console.log("La parola inserita non è un palindromo!");
}


