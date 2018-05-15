"use strict"
import DieRoller from "./Dice.js";
//Object creation
let dice = new DieRoller();

let dies = {
    d4: 4,
    d6: 6,
    d8: 8,
    d10: 10,
    d12: 12,
    d20: 20,
    d100: 100
}

alert(dice.roll(dies.d6,9999,0));
