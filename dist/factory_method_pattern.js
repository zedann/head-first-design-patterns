"use strict";
class concreteProductA {
    doSomething() {
        console.log("ConcreteProductA does something");
    }
}
class ConcreteProductB {
    doSomething() {
        console.log("ConcreteProcutB does something");
    }
}
class ConcreteCreatorA {
    createProduct() {
        return new concreteProductA();
    }
}
class ConcreteCreatorB {
    createProduct() {
        return new ConcreteProductB();
    }
}
function clientCode(creator) {
    const product = creator.createProduct();
    product.doSomething();
}
clientCode(new ConcreteCreatorA());
clientCode(new ConcreteCreatorB());
