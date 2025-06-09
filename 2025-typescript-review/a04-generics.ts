// Generics is a placeholder for a data type
// they are represented by <T> in the class name
// <T> is the placeholder and later defined when instance is created
class Queue<T> {
  private data: T[] = [];

  add(item: T) {
    this.data.push(item);
  }

  remove() {
    this.data.shift();
  }
}

// when instance is created, the placeholder <T> is replaced with type
// <T> is replaced with string
const nameQueue = new Queue<string>();
nameQueue.add('Jeff');
// nameQueue.add(5);  // not allowed
nameQueue.add('Leonardo');

// <T> replaced with number
const numberQueue = new Queue<number>();
numberQueue.add(15);  

