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
    const target = new Adaptee();
    const adapter = new Adapter(target);
    adapter.request();
}
client();
