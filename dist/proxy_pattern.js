"use strict";
class RealImage {
    constructor(filename) {
        this.filename = filename;
        this.loadFromDisk();
    }
    loadFromDisk() {
        console.log(`loading ${this.filename} from the disk`);
    }
    display() {
        console.log(`Displaying ${this.filename}`);
    }
}
class LazyProxyImage {
    constructor(filename) {
        this.image = null;
        this.filename = filename;
    }
    display() {
        if (this.image === null) {
            this.image = new RealImage(this.filename);
        }
        this.image.display();
    }
}
const img = new LazyProxyImage("test.png");
img.display();
img.display();
img.display();
