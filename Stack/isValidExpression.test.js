import { isValidExpression } from './isValidExpression.js';
import { describe, test, expect } from 'vitest';

describe('isValidExpression', () => {
  test('returns true for a valid expression', () => {
    const expression = '<1 + 2> * 5';
    const result = true;
    expect(isValidExpression(expression)).toBe(result);
  });

  test('returns true for a valid nested expression', () => {
    const expression = '<<1 + 2> * 5> + <6 + 7>';
    const result = true;
    expect(isValidExpression(expression)).toBe(result);
  });

  test('returns false for an expression with mismatched brackets', () => {
    const expression = '<<1 + 2> * 9';
    const result = false;
    expect(isValidExpression(expression)).toBe(result);
  });

  test('returns false for an expression with an unclosed bracket', () => {
    const expression = '<1 + 2> * 9>';
    const result = false;
    expect(isValidExpression(expression)).toBe(result);
  });

  test('returns false for an empty expression', () => {
    const expression = '';
    const result = false;
    expect(isValidExpression(expression)).toBe(result);
  });
});
