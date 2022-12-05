export class LinkedList {
  constructor() {
    this.head = null; // first one
    this.tail = null; // last one
  }
  append(value) {
    const newElement = { value: value, next: null };

    if (this.tail) {
      this.tail.next = newElement;
    }
    this.tail = newElement;

    if (!this.head) {
      this.head = newElement;
    }
  }

  toArray() {
    const elements = [];

    let currentEl = this.head;

    while (currentEl) {
      elements.push(currentEl);
      currentEl = currentEl.next;
    }

    return elements;
  }

  prepend(value) {
    const newElement = { value: value, next: this.head };
    this.head = newElement;

    if (!this.tail) {
      this.tail = newElement;
    }
  }

  delete(value) {
    let el = this.head;

    if (!el) {
      return;
    }

    while (this.head && this.head.value === value) {
      this.head = this.head.next;
    }

    while (el.next) {
      if (el.next.value === value) {
        el.next = el.next.next;
      } else {
        el = el.next;
      }
    }

    if (this.tail.value === value) {
      this.tail = el;
    }
  }

  insertAfter(value, afterValue) {
    const existingEl = this.find(afterValue);

    if (existingEl) {
      const newEl = { value: value, next: existingEl.next };
      existingEl.next = newEl;
    }
  }

  deleteHead() {
    if (!this.head) {
      return;
    }

    const deleteItem = this.head;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return this.head;
  }

  print() {
    let el = this.head;
    console.log("whole objerct is", el);
  }

  find(value) {
    if (!this.head) {
      return;
    }
    let el = this.head;
    while (el) {
      if (el.value === value) {
        return el;
      }
      el = el.next;
    }
    return;
  }
}

// test

const linkedList = new LinkedList();

linkedList.append("22");
linkedList.append("33");
linkedList.append("44");
linkedList.append(true);

linkedList.prepend("11");
linkedList.prepend("11");

linkedList.delete(true);

// console.log(linkedList.find("11"));

linkedList.insertAfter("new value", "33");

linkedList.print();
