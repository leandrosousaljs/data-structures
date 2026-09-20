import { findFirstUniqueAge } from './findFirstUniqueAge.js';
import { describe, test, expect } from 'vitest';

describe('findFirstUniqueAge', () => {
  test('returns the first age when it is unique', () => {
    const ages = [21, 21, 30, 40, 40];
    const result = 30;
    expect(findFirstUniqueAge(ages)).toBe(result);
  });

  test('returns the first unique age after repeated ages', () => {
    const ages = [18, 18, 25, 25, 32, 32, 45];
    const result = 45;
    expect(findFirstUniqueAge(ages)).toBe(result);
  });

  test('returns the first unique age when multiple unique ages exist', () => {
    const ages = [20, 31, 20, 42, 31, 53];
    const result = 42;
    expect(findFirstUniqueAge(ages)).toBe(result);
  });

  test('returns the no-unique-age message when every age is repeated', () => {
    const ages = [18, 18, 25, 25, 40, 40];
    const result = 'No unique age was found.';
    expect(findFirstUniqueAge(ages)).toBe(result);
  });

  test('returns the no-unique-age message for an empty array', () => {
    const ages = [];
    const result = 'No unique age was found.';
    expect(findFirstUniqueAge(ages)).toBe(result);
  });
});
