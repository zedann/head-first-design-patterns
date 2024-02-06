class SubSystemOne {
  public OperationOne(): void {
    console.log("SubSystem One-Operation One");
  }
  public OperationTwo(): void {
    console.log("SubSystem Two-Operation Two");
  }
}
class SubSystemTwo {
  public OperationThree(): void {
    console.log("SubSystem Three-Operation Three");
  }
  public OperationFour(): void {
    console.log("SubSystem Four -Operation Four");
  }
}
class Facade {
  private subsystemOne: SubSystemOne;
  private subsystemTwo: SubSystemTwo;
  public constructor() {
    this.subsystemOne = new SubSystemOne();
    this.subsystemTwo = new SubSystemTwo();
  }
  public operationWrapper(): void {
    console.log("Facade operation wrapper");
    this.subsystemOne.OperationOne();
    this.subsystemOne.OperationTwo();
    this.subsystemTwo.OperationThree();
    this.subsystemTwo.OperationFour();
  }
}

const facade: Facade = new Facade();
facade.operationWrapper();
