export const tagSumLottery = (communications, lotteryNumber) => {
  const winners = [];
  const tagName = new Map();

  for (const { tag, name } of communications) {
    const difference = lotteryNumber - tag;

    if (tagName.has(difference)) {
      winners.push([tagName.get(difference), name].toSorted());
    } else {
      tagName.set(tag, name);
    }
  }

  if (winners.length > 0) return winners;

  return 'No winners';
};

// Time complexity: O(n)
// Space complexity: O(n)
