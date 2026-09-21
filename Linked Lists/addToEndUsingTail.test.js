import { addToEndUsingTail } from './addToEnd.js';
import { Node } from './node.js';
import { describe, test, expect } from 'vitest';

describe('addToEndUsingTail', () => {
  test('creates and returns the head when the list is empty', () => {
    const head = null;
    const tail = null;
    const result = addToEndUsingTail(head, tail, 'first');

    expect(result.value).toBe('first');
    expect(result.next).toBe(null);
  });

  test('adds a node after the tail of a one-node list', () => {
    const head = new Node('first');
    const tail = head;
    const result = addToEndUsingTail(head, tail, 'second');

    expect(result).toBe(head);
    expect(tail.next.value).toBe('second');
    expect(tail.next.next).toBe(null);
  });

  test('returns the original head when adding to a non-empty list', () => {
    const head = new Node('first');
    const middle = new Node('middle');
    const tail = new Node('last');
    head.next = middle;
    middle.next = tail;

    const result = addToEndUsingTail(head, tail, 'new last');

    expect(result).toBe(head);
    expect(head.value).toBe('first');
    expect(tail.next.value).toBe('new last');
  });

  test('links the new node after the provided tail', () => {
    const head = new Node(1);
    const second = new Node(2);
    const tail = new Node(3);
    head.next = second;
    second.next = tail;

    addToEndUsingTail(head, tail, 4);

    expect(head.next.next.next.value).toBe(4);
    expect(head.next.next.next.next).toBe(null);
  });
});
