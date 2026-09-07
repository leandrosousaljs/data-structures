import { findAllPalindromes } from './findAllPalindromes.js';
import { describe, test, expect } from 'vitest';

describe('findAllPalindromes', () => {
  test('returns the palindromic usernames from an array', () => {
    const usernames = ['anna', 'michael', 'level', 'sarah'];
    const result = ['anna', 'level'];
    expect(findAllPalindromes(usernames)).toEqual(result);
  });

  test('ignores letter case when checking usernames', () => {
    const usernames = ['Racecar', 'Jordan', 'LEVEL'];
    const result = ['Racecar', 'LEVEL'];
    expect(findAllPalindromes(usernames)).toEqual(result);
  });

  test('returns an empty array when there are no palindromes', () => {
    const usernames = ['alex', 'maria', 'jordan'];
    const result = [];
    expect(findAllPalindromes(usernames)).toEqual(result);
  });

  test('returns an empty array for an empty input array', () => {
    const usernames = [];
    const result = [];
    expect(findAllPalindromes(usernames)).toEqual(result);
  });

  test('returns all palindromic usernames in their original order', () => {
    const usernames = ['civic', 'taylor', 'Bob', 'deified'];
    const result = ['civic', 'Bob', 'deified'];
    expect(findAllPalindromes(usernames)).toEqual(result);
  });
});
