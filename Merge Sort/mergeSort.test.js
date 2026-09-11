import { mergeSort } from './mergeSort.js';
import { describe, test, expect } from 'vitest';

describe('mergeSort', () => {
  test('sorts an unsorted array in ascending order', () => {
    const numbers = [38, 27, 43, 3, 9, 82, 10];
    const result = [3, 9, 10, 27, 38, 43, 82];
    expect(mergeSort(numbers)).toEqual(result);
  });

  test('sorts an array in reverse order', () => {
    const numbers = [5, 4, 3, 2, 1];
    const result = [1, 2, 3, 4, 5];
    expect(mergeSort(numbers)).toEqual(result);
  });

  test('sorts an array containing duplicate numbers', () => {
    const numbers = [4, 2, 4, 1, 2, 3, 3];
    const result = [1, 2, 2, 3, 3, 4, 4];
    expect(mergeSort(numbers)).toEqual(result);
  });

  test('returns an already sorted array unchanged', () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = [1, 2, 3, 4, 5];
    expect(mergeSort(numbers)).toEqual(result);
  });

  test('handles an array with a single element', () => {
    const numbers = [42];
    const result = [42];
    expect(mergeSort(numbers)).toEqual(result);
  });
});
