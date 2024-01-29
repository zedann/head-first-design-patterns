class Singleton {
  private static instance: Singleton | null = null;
  private constructor() {}
  public static getInstance(): Singleton {
    if (!this.instance) {
      this.instance = new Singleton();
    }
    return this.instance;
  }
  public method(): void {
    console.log("method");
  }
}

const s: Singleton = Singleton.getInstance();
console.log(s);
s.method();
