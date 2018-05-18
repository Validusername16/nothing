"use strict";
import DieRoller from './Dice.js';
import EnemyHandler from "./EnemyHandler.js";
let enemyHandler = new EnemyHandler();
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
export default class Character {
    constructor(name,type,bioform,str,dex,con,int,wis,cha,armor,bw,ep,ef,ul) {
        this.name = name;
        this.type = type;
        this.str = str;
        this.dex = dex;
        this.con = con;
        this.int = int;
        this.wis = wis;
        this.cha = cha;
        this.armor = armor;
        this.bw = bw;
        this.ep = ep;
        this.ef = ef;
        this.ul = ul;
    }

    getName() {
        return this.name;
    }

    rollD20(number) {
        return dice.roll(dies.d20,number,this.ul);
    }

    attack(bonusChip) {
        return enemyHandler.testForKill(dice.roll(dies.d20,bonusChip?2:1,this.ep));
    }

    createEnemy(target) {
        enemyHandler.createEnemy(target);
    }
}