import { search } from './search.js';
import { insert } from './insert.js';
import { describe, test, expect } from 'vitest';

const createTree = () => {
  let root = null;
  root = insert(root, 8);
  root = insert(root, 4);
  root = insert(root, 12);
  root = insert(root, 2);
  root = insert(root, 6);
  root = insert(root, 10);
  root = insert(root, 14);
  return root;
};

describe('search', () => {
  test('returns true when the target is the root value', () => {
    const root = createTree();
    const target = 8;
    const result = true;

    expect(search(root, target)).toBe(result);
  });

  test('returns true when the target is in the left subtree', () => {
    const root = createTree();
    const target = 6;
    const result = true;

    expect(search(root, target)).toBe(result);
  });

  test('returns true when the target is in the right subtree', () => {
    const root = createTree();
    const target = 14;
    const result = true;

    expect(search(root, target)).toBe(result);
  });

  test('returns false when the target is not in the tree', () => {
    const root = createTree();
    const target = 9;
    const result = false;

    expect(search(root, target)).toBe(result);
  });

  test('returns false when searching an empty tree', () => {
    const root = null;
    const target = 8;
    const result = false;

    expect(search(root, target)).toBe(result);
  });
});
