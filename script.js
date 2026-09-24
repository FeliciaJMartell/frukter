// JavaScript

// Globala variabler


// Funktion som körs då hela webbsidan är inladdad, dvs då all HTML-kod är utförd.
// Initiering av globala variabler samt koppling avfunktioner till knapparna.

let inputElem;
let msgElem;


function init() {
    inputElem = [];
    inputElem[1] = document.getElementById("input1");
    inputElem[2] = document.getElementById("input2");
    inputElem[3] = document.getElementById("input3");

    msgElem = document.getElementById("message");

    document.getElementById("btn1").addEventListener("click", showFruit);
	
} // End init

function showFruit () {
    let nr = inputElem[1].value;
    let fruitUrl; 

    if (isNaN(nr)) {
        msgElem.textContent = "Du måste skriva siffror"
        return; 
    }

    if (nr < 1 || nr > 5) {
        msgElem.textContent = "Talet måste vara mellan 1 och 5"
    return;
}
    nr = parseInt(nr);
    inputElem[1].value = nr;


    fruitUrl = "pics/fruit" + nr + ".jpg";

    document.getElementById("fruitImg").src = fruitUrl; 
}
window.onload = init; // Se till att init aktiveras då sidan är inladdad
