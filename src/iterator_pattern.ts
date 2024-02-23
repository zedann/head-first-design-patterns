interface IIterator<T> {
  hasNext(): boolean;
  next(): void;
  current(): T;
}
interface IIterable<T> {
  createIterator(): IIterator<T>;
}

class ArrayIterator<T> implements IIterator<T> {
  private index: number = 0;
  private collection: T[];
  public constructor(collection: T[]) {
    this.collection = collection;
  }
  hasNext(): boolean {
    return this.index < this.collection.length;
  }
  next(): void {
    if (!this.hasNext()) {
      throw new Error("no more elements in collection");
    }
    this.index++;
  }
  current(): T {
    return this.collection[this.index];
  }
}
class ArrayCollection<T> implements IIterable<T> {
  private collectionItems: T[] = [];
  public add(item: T): void {
    this.collectionItems.push(item);
  }
  createIterator(): IIterator<T> {
    return new ArrayIterator<T>(this.collectionItems);
  }
}

const myArr = new ArrayCollection<number>();
myArr.add(1);
myArr.add(2);
myArr.add(3);

const iterator = myArr.createIterator();
while (iterator.hasNext()) {
  console.log(iterator.current());
  iterator.next();
}
