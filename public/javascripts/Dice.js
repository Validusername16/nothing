"use strict"

export default class DieRoller {
    constructor() {
        //No things to have to this. :D
    }

    roll(type, number, bonus) {
        if(isNaN(type)) {
            throw("Invalid die type");
        } else {
            let rolls = [];
            let total = 0;
            for (let i = 0; i < number; i++) {
                let roll = Math.ceil(Math.random()*type);
                if(roll == 0) roll = 1; //Ridiculously low chance of occurring, but ¯\_(ツ)_/¯
                rolls.push(roll);
                total += roll;
            }
            total += bonus;
            return total;
        }

    }

}