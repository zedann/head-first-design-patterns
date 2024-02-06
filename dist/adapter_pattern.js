"use strict";
class Adapter {
    constructor(adaptee) {
        this.adaptee = adaptee;
    }
    request() {
        this.adaptee.specificRequest();
    }
}
class Adaptee {
    specificRequest() {
        console.log("specificRequest");
    }
}
function client() {
    const target = new Adapter(new Adaptee());
    target.request();
}
client();
