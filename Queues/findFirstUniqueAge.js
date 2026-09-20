import { Queue } from './queue';

export const findFirstUniqueAge = (ages) => {
  const queue = new Queue();
  const ageFrequency = new Map();

  for (const age of ages) {
    queue.enqueue(age);
    if (!ageFrequency.has(age)) {
      ageFrequency.set(age, 1);
    } else {
      ageFrequency.set(age, ageFrequency.get(age) + 1);
    }
  }

  while (!queue.isEmpty()) {
    const age = queue.dequeue();
    if (ageFrequency.get(age) === 1) {
      return age;
    }
  }

  return 'No unique age was found.';
};

// Time complexity: O(n)
// Space compelxity: O(n)
