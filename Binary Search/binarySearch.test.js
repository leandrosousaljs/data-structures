import { binarySearch } from './binarySearch.js';
import { describe, test, expect } from 'vitest';

describe('binarySearch', () => {
  test('returns the index of the first element when it matches the target', () => {
    const numbers = [10, 20, 30, 40, 50];
    const target = 10;
    const result = 0;
    expect(binarySearch(numbers, target)).toBe(result);
  });

  test('returns the index of a matching element in the middle', () => {
    const numbers = [10, 20, 30, 40, 50];
    const target = 30;
    const result = 2;
    expect(binarySearch(numbers, target)).toBe(result);
  });

  test('returns the index of the matching element', () => {
    const numbers = [10, 12, 15, 18, 19, 22, 25, 28, 30];
    const target = 12;
    const result = 1;
    expect(binarySearch(numbers, target)).toBe(result);
  });

  test('returns the index of the matching element', () => {
    const numbers = [10, 12, 15, 18, 19, 22, 25, 28, 30];
    const target = 28;
    const result = 7;
    expect(binarySearch(numbers, target)).toBe(result);
  });

  test('returns -1 when the target is not found', () => {
    const numbers = [10, 20, 30, 40, 50];
    const target = 35;
    const result = -1;
    expect(binarySearch(numbers, target)).toBe(result);
  });

  test('returns -1 when searching an empty array', () => {
    const numbers = [];
    const target = 10;
    const result = -1;
    expect(binarySearch(numbers, target)).toBe(result);
  });
});
