import { factorial } from './factorial.js';
import { describe, test, expect } from 'vitest';

describe('factorial', () => {
  test('returns 1 when n is 0', () => {
    const n = 0;
    const result = 1;
    expect(factorial(n)).toBe(result);
  });

  test('returns 1 when n is 1', () => {
    const n = 1;
    const result = 1;
    expect(factorial(n)).toBe(result);
  });

  test('calculates factorial of 5', () => {
    const n = 5;
    const result = 120;
    expect(factorial(n)).toBe(result);
  });

  test('calculates factorial of 10', () => {
    const n = 10;
    const result = 3628800;
    expect(factorial(n)).toBe(result);
  });

  test('calculates factorial of 3', () => {
    const n = 3;
    const result = 6;
    expect(factorial(n)).toBe(result);
  });
});
