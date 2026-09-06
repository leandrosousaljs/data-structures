import { getAgeRange } from './getAgeRange.js';
import { describe, test, expect } from 'vitest';

describe('getAgeRange', () => {
  test('array of length 8 gets age range 99', () => {
    const ages = [8, 51, 3, 64, 1, 75, 9, 100];
    const result = 99;
    expect(getAgeRange(ages)).toBe(result);
  });

  test('empty array returns null', () => {
    const ages = [];
    const result = null;
    expect(getAgeRange(ages)).toBe(result);
  });

  test('array with one age gets age range 0', () => {
    const ages = [42];
    const result = 0;
    expect(getAgeRange(ages)).toBe(result);
  });

  test('array with identical ages gets age range 0', () => {
    const ages = [25, 25, 25];
    const result = 0;
    expect(getAgeRange(ages)).toBe(result);
  });
});
