"use strict";

export default class EnemyHandler {
    constructor() {

    }

    createEnemy(targetNumber) {
        this.targetNumber = targetNumber;
    }

    testForKill(roll) {
        if(roll > this.targetNumber) return true;
        else return false;
    }
}
