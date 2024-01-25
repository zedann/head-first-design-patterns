interface IFlyBehavior {
  fly: () => void;
}
interface IQuackBehavior {
  quack: () => void;
}

class RegularFly implements IFlyBehavior {
  fly(): void {
    console.log("regular flying duck");
  }
}
class NoFly implements IFlyBehavior {
  fly(): void {
    console.log("duck can not fly");
  }
}
class RegularQuack implements IQuackBehavior {
  quack(): void {
    console.log("regular Quacking duck");
  }
}

class Duck {
  fb: IFlyBehavior;
  qb: IQuackBehavior;
  constructor(fb: IFlyBehavior, qb: IQuackBehavior) {
    this.fb = fb;
    this.qb = qb;
  }
  performFly(): void {
    this.fb.fly();
  }
  performQuack(): void {
    this.qb.quack();
  }
}
const mallardDuck = new Duck(new RegularFly(), new RegularQuack());
mallardDuck.performFly();
mallardDuck.performQuack();
