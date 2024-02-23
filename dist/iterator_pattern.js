"use strict";
class ArrayIterator {
    constructor(collection) {
        this.index = 0;
        this.collection = collection;
    }
    hasNext() {
        return this.index < this.collection.length;
    }
    next() {
        if (!this.hasNext()) {
            throw new Error("no more elements in collection");
        }
        this.index++;
    }
    current() {
        return this.collection[this.index];
    }
}
class ArrayCollection {
    constructor() {
        this.collectionItems = [];
    }
    add(item) {
        this.collectionItems.push(item);
    }
    createIterator() {
        return new ArrayIterator(this.collectionItems);
    }
}
const myArr = new ArrayCollection();
myArr.add(1);
myArr.add(2);
myArr.add(3);
const iterator = myArr.createIterator();
while (iterator.hasNext()) {
    console.log(iterator.current());
    iterator.next();
}
