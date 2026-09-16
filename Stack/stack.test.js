import { Stack } from './stack.js';
import { describe, test, expect } from 'vitest';

describe('Stack', () => {
  test('starts empty with size 0', () => {
    const stack = new Stack();

    expect(stack.size()).toBe(0);
    expect(stack.isEmpty()).toBe(true);
  });

  test('pushes elements and updates the size', () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);

    expect(stack.size()).toBe(2);
    expect(stack.isEmpty()).toBe(false);
  });

  test('pops elements in last-in-first-out order', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);

    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.isEmpty()).toBe(true);
  });

  test('peeks at the top element without removing it', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);

    expect(stack.peek()).toBe(2);
    expect(stack.size()).toBe(2);
    expect(stack.peek()).toBe(2);
  });

  test('throws an error when popping an empty stack', () => {
    const stack = new Stack();

    expect(() => stack.pop()).toThrow('Stack is empty.');
  });

  test('throws an error when peeking at an empty stack', () => {
    const stack = new Stack();

    expect(() => stack.peek()).toThrow('Stack is empty.');
  });
});
