"use strict";
class RegularFly {
    fly() {
        console.log("regular flying duck");
    }
}
class NoFly {
    fly() {
        console.log("duck can not fly");
    }
}
class RegularQuack {
    quack() {
        console.log("regular Quacking duck");
    }
}
class Duck {
    constructor(fb, qb) {
        this.fb = fb;
        this.qb = qb;
    }
    performFly() {
        this.fb.fly();
    }
    performQuack() {
        this.qb.quack();
    }
}
const mallardDuck = new Duck(new RegularFly(), new RegularQuack());
mallardDuck.performFly();
mallardDuck.performQuack();
