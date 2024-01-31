"use strict";
class Reciver {
    actionA() {
        console.log("actionA reciver got executed");
    }
    actionB() {
        console.log("actionB reciver got executed");
    }
}
class CommandA {
    constructor(reciver) {
        this.reciver = reciver;
    }
    execute() {
        this.reciver.actionA();
    }
    unexecute() {
        console.log("commandA got rolled back");
    }
}
class CommandB {
    constructor(reciver) {
        this.reciver = reciver;
    }
    execute() {
        this.reciver.actionB();
    }
    unexecute() {
        console.log("commandB got rolled back");
    }
}
class Invoker {
    constructor(command1, command2) {
        this.command1 = command1;
        this.command2 = command2;
    }
    executeCommand1() {
        this.command1.execute();
    }
    executeCommand2() {
        this.command2.execute();
    }
}
const light = new Reciver();
const lightOn = new CommandA(light);
const lightOff = new CommandB(light);
const invoker = new Invoker(lightOn, lightOff);
invoker.executeCommand1();
invoker.executeCommand2();
