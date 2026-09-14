import { findNamesOfDuplicates } from './findNamesOfDuplicates.js';
import { describe, test, expect } from 'vitest';

describe('findNamesOfDuplicates', () => {
  test('array of length 6 gets 4 names of duplicate IDs', () => {
    const people = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' },
      { id: 1, name: 'Eve' },
      { id: 2, name: 'Frank' },
      { id: 5, name: 'Claire' },
    ];
    const result = ['Alice', 'Eve', 'Bob', 'Frank'];
    expect(findNamesOfDuplicates(people)).toEqual(result);
  });

  test('array of length 6 gets 2 names of duplicate IDs', () => {
    const people = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' },
      { id: 1, name: 'Eve' },
      { id: 5, name: 'Frank' },
      { id: 6, name: 'Claire' },
    ];
    const result = ['Alice', 'Eve'];
    expect(findNamesOfDuplicates(people)).toEqual(result);
  });

  test('array of length 6 gets no names of duplicate IDs', () => {
    const people = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' },
      { id: 4, name: 'Eve' },
      { id: 5, name: 'Frank' },
      { id: 6, name: 'Claire' },
    ];
    const result = [];
    expect(findNamesOfDuplicates(people)).toEqual(result);
  });
});
