"use strict";
class SubSystemOne {
    OperationOne() {
        console.log("SubSystem One-Operation One");
    }
    OperationTwo() {
        console.log("SubSystem Two-Operation Two");
    }
}
class SubSystemTwo {
    OperationThree() {
        console.log("SubSystem Three-Operation Three");
    }
    OperationFour() {
        console.log("SubSystem Four -Operation Four");
    }
}
class Facade {
    constructor() {
        this.subsystemOne = new SubSystemOne();
        this.subsystemTwo = new SubSystemTwo();
    }
    operationWrapper() {
        console.log("Facade operation wrapper");
        this.subsystemOne.OperationOne();
        this.subsystemOne.OperationTwo();
        this.subsystemTwo.OperationThree();
        this.subsystemTwo.OperationFour();
    }
}
const facade = new Facade();
facade.operationWrapper();
