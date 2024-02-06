"use strict";
class ConcreteProductA {
    method() {
        console.log("Product A method");
    }
}
class ConcreteProductB {
    method() {
        console.log("Product B method");
    }
}
class ConcreteProductA1 {
    method() {
        console.log("Product A1 method");
    }
}
class ConcreteProductB1 {
    method() {
        console.log("ProductB1 method");
    }
}
class ConcreteFactory1 {
    createProductA() {
        return new ConcreteProductA();
    }
    createProductB() {
        return new ConcreteProductB();
    }
}
class ConcreteFactory2 {
    createProductA() {
        return new ConcreteProductA1();
    }
    createProductB() {
        return new ConcreteProductB1();
    }
}
function clientCode(factory) {
    const productA = factory.createProductA();
    const productB = factory.createProductB();
    console.log(productA.method());
    console.log(productB.method());
}
const factory1 = new ConcreteFactory1();
clientCode(factory1);
const factory2 = new ConcreteFactory2();
clientCode(factory2);
