export class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    // Push the element to the top/end of the stack.
    this.stack.push(element);
  }

  pop() {
    // Remove the top element from the end of stack and return it.
    if (this.isEmpty()) throw new Error('Stack is empty.');

    return this.stack.pop();
  }

  peek() {
    // Return the top element from the stack without removing it.
    if (this.isEmpty()) throw new Error('Stack is empty.');

    return this.stack[this.stack.length - 1];
  }

  size() {
    // Return the size of the stack.
    return this.stack.length;
  }

  isEmpty() {
    // Return whether the stack is empty or not.
    return this.stack.length === 0;
  }
}
