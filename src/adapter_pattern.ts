interface ITarget {
  request(): void;
}
class Adapter implements ITarget {
  adaptee: Adaptee;
  public constructor(adaptee: Adaptee) {
    this.adaptee = adaptee;
  }
  request(): void {
    this.adaptee.specificRequest();
  }
}
class Adaptee {
  public specificRequest() {
    console.log("specificRequest");
  }
}

function client() {
  const target: ITarget = new Adapter(new Adaptee());
  target.request();
}
client();
