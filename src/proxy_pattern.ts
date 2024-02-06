interface IImage {
  display(): void;
}
class RealImage implements IImage {
  private filename: string;
  public constructor(filename: string) {
    this.filename = filename;
    this.loadFromDisk();
  }
  public loadFromDisk() {
    console.log(`loading ${this.filename} from the disk`);
  }
  public display(): void {
    console.log(`Displaying ${this.filename}`);
  }
}
class LazyProxyImage implements IImage {
  private filename: string;
  private image: IImage | null = null;
  public constructor(filename: string) {
    this.filename = filename;
  }
  public display(): void {
    if (this.image === null) {
      this.image = new RealImage(this.filename);
    }
    this.image.display();
  }
}

const img: IImage = new LazyProxyImage("test.png");
img.display();
img.display();
img.display();
