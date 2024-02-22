"use strict";
class Leaf {
    operation() {
        console.log("Leaf operation");
    }
}
class Composite {
    constructor() {
        this.children = new Set();
    }
    add(comp) {
        this.children.add(comp);
    }
    remove(comp) {
        if (this.children.has(comp))
            this.children.delete(comp);
    }
    operation() {
        this.children.forEach((child) => {
            child.operation();
        });
    }
}
const leaf1 = new Leaf();
const leaf2 = new Leaf();
const composite = new Composite();
composite.add(leaf1);
composite.add(leaf2);
composite.operation();
