import { areTheyConnected } from './areTheyConnected.js';
import { describe, test, expect } from 'vitest';

describe('areTheyConnected', () => {
  test('returns true when the two vertices are directly connected', () => {
    const names = [0, 1];
    const adjacencyList = [[1], [0]];
    const result = true;

    expect(areTheyConnected(names, adjacencyList)).toBe(result);
  });

  test('returns true when the two vertices are connected through another vertex', () => {
    const names = [0, 2];
    const adjacencyList = [[1], [0, 2], [1]];
    const result = true;

    expect(areTheyConnected(names, adjacencyList)).toBe(result);
  });

  test('returns false when the two vertices are disconnected', () => {
    const names = [0, 3];
    const adjacencyList = [[1], [0], [3], [2]];
    const result = false;

    expect(areTheyConnected(names, adjacencyList)).toBe(result);
  });

  test('returns false when the graph has no connections', () => {
    const names = [0, 1];
    const adjacencyList = [[], []];
    const result = false;

    expect(areTheyConnected(names, adjacencyList)).toBe(result);
  });

  test('returns false when the target vertex does not exist in the graph', () => {
    const names = [0, 4];
    const adjacencyList = [[1], [0], [3], [2]];
    const result = false;

    expect(areTheyConnected(names, adjacencyList)).toBe(result);
  });
});
