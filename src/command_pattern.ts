interface ICommand {
  execute(): void;
  unexecute(): void;
}
class Reciver {
  actionA(): void {
    console.log("actionA reciver got executed");
  }
  actionB(): void {
    console.log("actionB reciver got executed");
  }
}
class CommandA implements ICommand {
  private reciver: Reciver;
  public constructor(reciver: Reciver) {
    this.reciver = reciver;
  }
  execute(): void {
    this.reciver.actionA();
  }
  unexecute(): void {
    console.log("commandA got rolled back");
  }
}
class CommandB implements ICommand {
  private reciver: Reciver;
  public constructor(reciver: Reciver) {
    this.reciver = reciver;
  }
  execute(): void {
    this.reciver.actionB();
  }
  unexecute(): void {
    console.log("commandB got rolled back");
  }
}
class Invoker {
  private command1: ICommand;
  private command2: ICommand;
  public constructor(command1: ICommand, command2: ICommand) {
    this.command1 = command1;
    this.command2 = command2;
  }
  executeCommand1(): void {
    this.command1.execute();
  }
  executeCommand2(): void {
    this.command2.execute();
  }
}
const light: Reciver = new Reciver();
const lightOn: CommandA = new CommandA(light);
const lightOff: CommandB = new CommandB(light);
const invoker: Invoker = new Invoker(lightOn, lightOff);
invoker.executeCommand1();
invoker.executeCommand2();
