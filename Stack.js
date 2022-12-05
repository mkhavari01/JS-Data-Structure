import { LinkedList } from "./linkedList.js";

// // using array
// class Stack {
//   constructor() {
//     this.items = [];
//   }

//   push(value) {
//     this.items.push(value);
//   }

//   pop() {
//     return this.items.pop();
//   }

//   print() {
//     return this.items;
//   }
// }

// const stack = new Stack();

// stack.push("item 1");
// stack.push("item 2");
// stack.push("item 3");

// stack.pop();

// console.log(stack.print());

// // using LinkedList

class Stack {
  constructor() {
    this.items = new LinkedList();
  }

  push(value) {
    this.items.append(value);
  }

  pop() {
    return this.items.deleteHead();
  }

  print() {
    this.items.print();
  }
}

const stack = new Stack();

stack.push("item 1");
stack.push("item 2");
stack.push("item 3");

stack.pop();

console.log(stack.print());
