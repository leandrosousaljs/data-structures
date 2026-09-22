import { addToEndUsingHead } from './addToEnd.js';
import { Node } from './node.js';
import { describe, test, expect } from 'vitest';

describe('addToEndUsingHead', () => {
  test('creates and returns the head when the list is empty', () => {
    const head = null;
    const result = addToEndUsingHead(head, 1);

    expect(result.value).toBe(1);
    expect(result.next).toBe(null);
  });

  test('adds a node after the tail of a one-node list', () => {
    const head = new Node(1);
    const result = addToEndUsingHead(head, 2);

    expect(result).toBe(head);
    expect(head.next.value).toBe(2);
    expect(head.next.next).toBe(null);
  });

  test('returns the original head when adding to a non-empty list', () => {
    const head = new Node(1);
    head.next = new Node(2);
    head.next.next = new Node(3);

    const result = addToEndUsingHead(head, 4);

    expect(result).toBe(head);
    expect(result.value).toBe(1);
    expect(result.next.next.next.value).toBe(4);
  });

  test('adds the value to the end of a longer list', () => {
    const head = new Node(10);
    head.next = new Node(20);
    head.next.next = new Node(30);
    head.next.next.next = new Node(40);

    addToEndUsingHead(head, 50);

    expect(head.next.next.next.next.value).toBe(50);
    expect(head.next.next.next.next.next).toBe(null);
  });
});
