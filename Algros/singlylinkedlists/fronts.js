// Add Front
// Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.
// Examples:

// SLL1 = new SLL()
// SLL1.addFront(18) => Node { data: 18, next: null }
// SLL1.addFront(5) => Node { data: 5, next: Node { data: 18, next: null } }
// SLL1.addFront(73) => Node { data: 73, next: Node { data: 5, next: Node { data: 18, next: null } } }

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class SLL {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // Add Front
  addFront(value) {
    this.head = new Node(value, this.head);
    this.length++;
  }

  //Remove Front
  // Write a method to remove the head node and return the new list head node. If the list is empty, return null.
  removeFront() {
    let current = this.head;
    let previous;

    if (current) {
      this.head = current.next;
    } else {
      while (current.next) {
        count++;
        previous = current;

        current = current.next;
      }
      previous.next = current.next;
    }
    this.length--;
  }

  // Front
  // Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.
  front() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

SLL1 = new SLL();
SLL1.addFront(18);
SLL1.addFront(5);
SLL1.front();
SLL1.removeFront();
SLL1.front();
console.log(SLL1);
