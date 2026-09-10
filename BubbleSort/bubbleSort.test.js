import { bubbleSort } from './bubbleSort.js';
import { describe, test, expect } from 'vitest';

describe('bubbleSort', () => {
	test('sorts an unsorted array in ascending order', () => {
		const numbers = [5, 2, 8, 1, 3];
		const result = [1, 2, 3, 5, 8];
		bubbleSort(numbers);
		expect(numbers).toEqual(result);
	});

	test('sorts an array in reverse order', () => {
		const numbers = [5, 4, 3, 2, 1];
		const result = [1, 2, 3, 4, 5];
		bubbleSort(numbers);
		expect(numbers).toEqual(result);
	});

	test('sorts an array containing duplicate numbers', () => {
		const numbers = [4, 2, 4, 1, 2];
		const result = [1, 2, 2, 4, 4];
		bubbleSort(numbers);
		expect(numbers).toEqual(result);
	});

	test('leaves an already sorted array unchanged', () => {
		const numbers = [1, 2, 3, 4, 5];
		const result = [1, 2, 3, 4, 5];
		bubbleSort(numbers);
		expect(numbers).toEqual(result);
	});

	test('handles an empty array', () => {
		const numbers = [];
		const result = [];
		bubbleSort(numbers);
		expect(numbers).toEqual(result);
	});
});
