import { tagSumLottery } from './tagSumLottery.js';
import { describe, test, expect } from 'vitest';

describe('tagSumLottery', () => {
  test('returns pairs of names whose tags add up to the lottery number', () => {
    const communications = [
      { tag: 3, name: 'Alice' },
      { tag: 7, name: 'Bob' },
      { tag: 5, name: 'Charlie' },
      { tag: 5, name: 'Diana' },
    ];
    const lotteryNumber = 10;
    const result = [
      ['Alice', 'Bob'],
      ['Charlie', 'Diana'],
    ];
    expect(tagSumLottery(communications, lotteryNumber)).toEqual(result);
  });

  test('sorts each winning pair alphabetically', () => {
    const communications = [
      { tag: 4, name: 'Zoe' },
      { tag: 6, name: 'Adam' },
    ];
    const lotteryNumber = 10;
    const result = [['Adam', 'Zoe']];
    expect(tagSumLottery(communications, lotteryNumber)).toEqual(result);
  });

  test('returns No winners when no tags add up to the lottery number', () => {
    const communications = [
      { tag: 2, name: 'Alice' },
      { tag: 4, name: 'Bob' },
      { tag: 8, name: 'Charlie' },
    ];
    const lotteryNumber = 11;
    const result = 'No winners';
    expect(tagSumLottery(communications, lotteryNumber)).toBe(result);
  });
});
