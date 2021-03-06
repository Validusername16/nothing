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
let targetNumber = document.getElementById("target-number");
let attackButton = document.getElementById("attack");
let checkbox = document.getElementById("traitBonus");
let specialDice = document.getElementsByTagName('select');
let submit = document.getElementById('roll');
let target = targetNumber.value;
let enemyHandler = new EnemyHandler();
let testPlayer = new Character();
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

targetNumber.addEventListener('change', () =>{
    target = targetNumber.value;
    enemyHandler.createEnemy(target);
    //alert("test");
});

submit.addEventListener('click', () =>{
    let type = specialDice.options[specialDice.selectedIndex].value;
    alert(type)
    if(type = 'd4') alert(dice.roll(dies.d4,1,0));
    if(type = 'd6') alert(dice.roll(dies.d6,1,0));
    if(type = 'd8') alert(dice.roll(dies.d8,1,0));
    if(type = 'd10') alert(dice.roll(dies.d10,1,0));
    if(type = 'd12') alert(dice.roll(dies.d12,1,0));
    if(type = 'd20') alert(dice.roll(dies.d20,1,0));
    if(type = 'd100') alert(dice.roll(dies.d100,1,0));
})

attackButton.addEventListener('click', () =>{
    let roll = dice.roll(dies.d20,checkbox.checked?2:1,0);
    let kill = enemyHandler.testForKill(roll);
    if(kill) {
        alert("You successfully killed the enemy by rolling " + roll);
    } else {
        alert("You were unable to kill the enemy due to rolling "+roll);
    }
});


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

    } else {
        cardOutput.innerHTML = deck.getSuit(card) + " " + deck.getCardType(card);
    }

});


addHP.addEventListener('click',() =>{
    if(health < 10) health++;
    hpDisplay.innerHTML = health;
});

subHP.addEventListener('click',() =>{
    if(health > 0) health--;
    hpDisplay.innerHTML = health;
});


