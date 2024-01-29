"use strict";
class Singleton {
    constructor() { }
    static getInstance() {
        if (!this.instance) {
            this.instance = new Singleton();
        }
        return this.instance;
    }
    method() {
        console.log("method");
    }
}
Singleton.instance = null;
const s = Singleton.getInstance();
console.log(s);
s.method();
