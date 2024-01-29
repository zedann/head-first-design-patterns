interface Factory {
  createProductA(): ProductA;
  createProductB(): ProductB;
}
interface ProductA {
  method(): void;
}
interface ProductB {
  method(): void;
}

class ConcreteProductA implements ProductA {
  method(): void {
    console.log("Product A method");
  }
}
class ConcreteProductB implements ProductB {
  method(): void {
    console.log("Product B method");
  }
}
class ConcreteProductA1 implements ProductA {
  method(): void {
    console.log("Product A1 method");
  }
}
class ConcreteProductB1 implements ProductB {
  method(): void {
    console.log("ProductB1 method");
  }
}

class ConcreteFactory1 implements Factory {
  createProductA(): ProductA {
    return new ConcreteProductA();
  }
  createProductB(): ProductB {
    return new ConcreteProductB();
  }
}
class ConcreteFactory2 implements Factory {
  createProductA(): ProductA {
    return new ConcreteProductA1();
  }
  createProductB(): ProductB {
    return new ConcreteProductB1();
  }
}
function clientCode(factory: Factory): void {
  const productA = factory.createProductA();
  const productB = factory.createProductB();
  console.log(productA.method());
  console.log(productB.method());
}
const factory1 = new ConcreteFactory1();
clientCode(factory1);
const factory2 = new ConcreteFactory2();
clientCode(factory2);
