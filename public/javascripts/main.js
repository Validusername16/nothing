"use strict"
import DieRoller from "./Dice.js";
import DeckOfCards from "./DeckOfCards.js";
//Object creation
let cardDrawer = document.getElementById("drawCard");
let debug = document.getElementById("debug");
let dice = new DieRoller();
let deck = new DeckOfCards();
let dies = {
    d4: 4,
    d6: 6,
    d8: 8,
    d10: 10,
    d12: 12,
    d20: 20,
    d100: 100
}


cardDrawer.addEventListener("click", () => {
    let card = deck.drawCard();
    alert("You drew a "+deck.getCardType(card)+" of "+deck.getSuit(card)+ "!");
    debug.innerHTML = deck.debug();
});

