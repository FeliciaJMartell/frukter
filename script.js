// JavaScript

// Globala variabler


// Funktion som körs då hela webbsidan är inladdad, dvs då all HTML-kod är utförd.
// Initiering av globala variabler samt koppling avfunktioner till knapparna.


// deklarerar min globala variabel, jag kan alltså hämta dessa till alla mina funktioner & de har för tillfället inget värde utan får ge värdet i funktionerna. 
// Jag deklarerar dom här och ger dom sedan värde i init. Från init kan jag sedan använda dom i mina andra funktioner.
// Dock vid användning av init så är det viktigt att man använder window.onload, vilket finns längre ner i koden.
let inputElem;
let msgElem;
let fruitNames;
let fruitNr;
let selFruitsElem;

function init() {
    inputElem = [];
    inputElem[1] = document.getElementById("input1");   // ger min variabel ett värde
    inputElem[2] = document.getElementById("input2");   // ger min variabel ett värde
    inputElem[3] = document.getElementById("input3");   // ger min variabel ett värde


    msgElem = document.getElementById("message");   // ger min variabel ett värde
    fruitNames = ["nofruit", "äpple", "banan", "citron", "apelsin", "päron"];
    fruitNr = 0;

    selFruitsElem = document.getElementById("selectedFruits");

    document.getElementById("btn1").addEventListener("click", showFruit);   // deklarerar min button och ger ett värde, samt säger till datorn att lyssna efter ett klicka
    document.getElementById("btn2").addEventListener("click", checkName);
    document.getElementById("btn3").addEventListener("click", addFruits);

} // End init

// funktionen är till för att visa bilder beroende på vilket nummer användaren skickar in. 
// funktionen skickar felmeddelande om man inte använder siffror eller inte skriver ett tal mellan 1-5. 
// lägger till en parseInt ifall man råkar skriva decimaler. 

function showFruit() { // ber funktionen visa bild efter vilket nummer man skrivit. 
    let fruitUrl;   // deklarerar en ny varibel som jag ger ett värde längre ner
    let nr = getNr(1, 5); // hämtar funktionen getNr

    if (nr == null) { // avslutar funktionen om värdet är ogiltigt
        return; 
    }

    fruitUrl = `pics/fruit${nr}.jpg`;                               // här ger jag värdet beroende på vilket nummer användaren skrivit in

    document.getElementById("fruitImg").src = fruitUrl;             // hämtar img elementet och byter bildkällans värde till fruiturl

    fruitNr = nr; // kopierar siffran från nr i denna funktion och lägger det i min globala variabel fruitNr
}

function checkName() { // bygger en ny funktion för min andra input
    let name = inputElem[2].value; // hämtar värdet som användaren skrivit in

    if (fruitNr == 0) { // om det inte finns någon frukt vald i input 1, så kommer felmeddelande
        msgElem.textContent = "Du måste välja frukt först"
        return;
    }

    if (name == fruitNames[fruitNr]) { // hämtar namnen från min deklarerade array i init & jämför med användarens inskrivna värde
        msgElem.textContent = "Rätt namn"
        return;
    } else {
        msgElem.textContent = "Fel namn" // vid fel frukt så får man felmeddelande
    }
}

function getNr (elemNr, high) { // bygger ny funktion som jag kan hämta till min input 1 & 3. 
let nr = inputElem[elemNr].value; // hämtar in värdet som användaren skriver in i input 1, med hjälp av value. 
    if (isNaN(nr)) {
        msgElem.textContent = "Du måste skriva siffror"     // Här ber jag datorn kolla så att det är siffror man skrivit, om det inte är det så får man ett felmeddelande
        return null; 
    }

    if (nr < 1 || nr > high) {
        msgElem.textContent = "Talet måste vara mellan 1 och " + high     // här ber jag datorn kolla att siffran är mellan 1 och high, är den inte det så får man ett felmeddelande
        return null; 
    }
    nr = parseInt(nr);                                              // använder parseint så att datorn genererar ut jämn siffra om man råkar skriva tex 3.45.
    inputElem[elemNr].value = nr;
    return nr; 
}


function addFruits() { // ny funktion för att lägga till hur många frukter man vill så
    let amount; // nya lokala variabler
    let imgList;
    let i;

    if (fruitNr == 0) { // om det inte finns någon frukt vald i input 1, så kommer felmeddelande 
        msgElem.textContent = "Du måste välja frukt först"
        return;
    }

    amount = getNr (3, 9); // elementnummer 3 och man kan högst välja siffran 9 

    if (amount != null) { // säger om det är inmatat fel från användaren, skicka ingenting.
        imgList = "";

        for (i = 1; i <= amount; i++) { // bygger en forloop så att den skickar ut bilderna utefter vad användaren valt för siffra
            imgList += `<img src="pics/fruit${fruitNr}.jpg">`; // plussar på en bild i minnet hela tiden, där fruitNr bestämmer vilken bild som ska visas (bestämt tidigare från funktionen show fruit)
        }
        selFruitsElem.innerHTML += imgList; // skickar ut antal bilder på frukten som man valt & låter med += bilderna ligga kvar om jag väljer ny frukt
        return; 
    }

    
}
window.onload = init; // Se till att init aktiveras då sidan är inladdad
