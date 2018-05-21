"use strict"
import DieRoller from "./Dice.js";
import DeckOfCards from "./DeckOfCards.js";
import EnemyHandler from "./EnemyHandler.js";
import Character from "./Character.js";
//Object creation
let cardDrawer = document.getElementById("drawCard");
let debug = document.getElementById("debug");
let hpDisplay = document.getElementById("hp");
let addHP = document.getElementById("addHealth");
let subHP = document.getElementById("subHealth");
let cardOutput = document.getElementById("cardOutput");
let enemyHandler = new EnemyHandler();
let testPlayer = new Character("steve","meme","THIS IS NEVER USED",99,99,999,99,99,9,9,9,9,9);
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
};

let health = 10;
hpDisplay.innerHTML = health;


cardDrawer.addEventListener("click", () => {
    let card = deck.drawCard();

    if(deck.getCardType(card) == "Joker") {
        deck.shuffle();

    }
    //alert("You drew a "+deck.getCardType(card)+" of "+deck.getSuit(card)+ "!");
    //debug.innerHTML = deck.debug();
    //testPlayer.createEnemy(20);
    //testPlayer.attack(false)?alert("Kill"):alert("No kill");
    if(deck.getCardType(card) != "Joker") {
        cardOutput.innerHTML = deck.getCardType(card) + " of " + deck.getSuit(card);

    }
});


addHP.addEventListener('click',() =>{
    health++;
    hpDisplay.innerHTML = health;
});

subHP.addEventListener('click',() =>{
    health--;
    hpDisplay.innerHTML = health;
});


