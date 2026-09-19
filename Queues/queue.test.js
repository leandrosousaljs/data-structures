import { Queue } from './queue.js';
import { describe, test, expect } from 'vitest';

describe('Queue', () => {
  test('starts empty with size 0', () => {
    const queue = new Queue();

    expect(queue.size()).toBe(0);
    expect(queue.isEmpty()).toBe(true);
  });

  test('enqueues elements and updates the size', () => {
    const queue = new Queue();

    queue.enqueue('first');
    queue.enqueue('second');

    expect(queue.size()).toBe(2);
    expect(queue.isEmpty()).toBe(false);
  });

  test('dequeues elements in first-in-first-out order', () => {
    const queue = new Queue();
    queue.enqueue('first');
    queue.enqueue('second');

    expect(queue.dequeue()).toBe('first');
    expect(queue.dequeue()).toBe('second');
    expect(queue.isEmpty()).toBe(true);
  });

  test('peeks at the first element without removing it', () => {
    const queue = new Queue();
    queue.enqueue('first');
    queue.enqueue('second');

    expect(queue.peek()).toBe('first');
    expect(queue.size()).toBe(2);
    expect(queue.peek()).toBe('first');
  });

  test('throws an error when dequeuing an empty queue', () => {
    const queue = new Queue();

    expect(() => queue.dequeue()).toThrow('Queue is empty.');
  });

  test('throws an error when peeking at an empty queue', () => {
    const queue = new Queue();

    expect(() => queue.peek()).toThrow('Queue is empty.');
  });
});
