import { theFriendliest } from './theFriendliest.js';
import { describe, test, expect } from 'vitest';

describe('theFriendliest', () => {
  test('returns the name with the most links when it is first', () => {
    const names = ['Alice', 'Bob', 'Charlie'];
    const list = [['Bob', 'Charlie'], ['Alice'], ['Alice']];
    const result = 'Alice';

    expect(theFriendliest(names, list)).toBe(result);
  });

  test('returns the name with the most links in the middle', () => {
    const names = ['Alice', 'Bob', 'Charlie'];
    const list = [['Bob'], ['Alice', 'Charlie', 'Diana'], ['Alice']];
    const result = 'Bob';

    expect(theFriendliest(names, list)).toBe(result);
  });

  test('returns the name with the most links when it is last', () => {
    const names = ['Alice', 'Bob', 'Charlie'];
    const list = [['Bob'], ['Alice'], ['Alice', 'Bob', 'Diana']];
    const result = 'Charlie';

    expect(theFriendliest(names, list)).toBe(result);
  });

  test('returns the first name when multiple names have the same most links', () => {
    const names = ['Alice', 'Bob', 'Charlie'];
    const list = [['Bob', 'Charlie'], ['Alice', 'Charlie'], ['Alice']];
    const result = 'Alice';

    expect(theFriendliest(names, list)).toBe(result);
  });
});
