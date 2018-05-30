"use strict";
    var target = 0;
export default class EnemyHandler {
    constructor() {

    }

    createEnemy(targetNumber) {
        target = targetNumber;
    }

    testForKill(roll) {
        if(roll > target) return true;
        else return false;
    }
}
