"use strict";
class Beverage {
}
class AddonDecorator extends Beverage {
}
class Espreso extends Beverage {
    cost() {
        return 2;
    }
}
class CaramelDecorator extends AddonDecorator {
    constructor(beverage) {
        super();
        this.beverage = beverage;
    }
    cost() {
        return this.beverage.cost() + 1;
    }
}
const espreso = new Espreso();
const espresoCaramel = new CaramelDecorator(espreso);
console.log(espresoCaramel.cost());
