interface Product {
  doSomething(): void;
}
class concreteProductA implements Product {
  doSomething(): void {
    console.log("ConcreteProductA does something");
  }
}
class ConcreteProductB implements Product {
  doSomething(): void {
    console.log("ConcreteProcutB does something");
  }
}
interface Creator {
  createProduct(): Product;
}

class ConcreteCreatorA implements Creator {
  createProduct(): Product {
    return new concreteProductA();
  }
}
class ConcreteCreatorB implements Creator {
  createProduct(): Product {
    return new ConcreteProductB();
  }
}

function clientCode(creator: Creator): void {
  const product: Product = creator.createProduct();
  product.doSomething();
}
clientCode(new ConcreteCreatorA());
clientCode(new ConcreteCreatorB());
