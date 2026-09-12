export const linearSearch = (numbers, target) => {
  for (let i = 0; i < numbers.length; i++) if (target === numbers[i]) return i;

  return -1;
};

// Time complexity: O(n)
// Time complexity: O(1)
