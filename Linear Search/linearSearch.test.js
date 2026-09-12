import { linearSearch } from './linearSearch.js';
import { describe, test, expect } from 'vitest';

describe('linearSearch', () => {
  test('returns the index of the first element when it matches the target', () => {
    const numbers = [10, 20, 30, 40];
    const target = 10;
    const result = 0;
    expect(linearSearch(numbers, target)).toBe(result);
  });

  test('returns the index of a matching element in the middle', () => {
    const numbers = [10, 20, 30, 40];
    const target = 30;
    const result = 2;
    expect(linearSearch(numbers, target)).toBe(result);
  });

  test('returns the index of the last element when it matches the target', () => {
    const numbers = [10, 20, 30, 40];
    const target = 40;
    const result = 3;
    expect(linearSearch(numbers, target)).toBe(result);
  });

  test('returns -1 when the target is not found', () => {
    const numbers = [10, 20, 30, 40];
    const target = 25;
    const result = -1;
    expect(linearSearch(numbers, target)).toBe(result);
  });

  test('returns -1 when searching an empty array', () => {
    const numbers = [];
    const target = 10;
    const result = -1;
    expect(linearSearch(numbers, target)).toBe(result);
  });
});
