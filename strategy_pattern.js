var RegularFly = /** @class */ (function () {
    function RegularFly() {
    }
    RegularFly.prototype.fly = function () {
        console.log("regular flying duck");
    };
    return RegularFly;
}());
var NoFly = /** @class */ (function () {
    function NoFly() {
    }
    NoFly.prototype.fly = function () {
        console.log("duck can not fly");
    };
    return NoFly;
}());
var RegularQuack = /** @class */ (function () {
    function RegularQuack() {
    }
    RegularQuack.prototype.quack = function () {
        console.log("regular Quacking duck");
    };
    return RegularQuack;
}());
var Duck = /** @class */ (function () {
    function Duck(fb, qb) {
        this.fb = fb;
        this.qb = qb;
    }
    Duck.prototype.performFly = function () {
        this.fb.fly();
    };
    Duck.prototype.performQuack = function () {
        this.qb.quack();
    };
    return Duck;
}());
var mallardDuck = new Duck(new RegularFly(), new RegularQuack());
mallardDuck.performFly();
mallardDuck.performQuack();
