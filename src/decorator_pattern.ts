abstract class Beverage {
  abstract cost(): number;
}
abstract class AddonDecorator extends Beverage {
  abstract cost(): number;
}

class Espreso extends Beverage {
  cost(): number {
    return 2;
  }
}

class CaramelDecorator extends AddonDecorator {
  private beverage: Beverage;
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }
  cost(): number {
    return this.beverage.cost() + 1;
  }
}
const espreso: Espreso = new Espreso();
const espresoCaramel = new CaramelDecorator(espreso);
console.log(espresoCaramel.cost());
