export const binarySearch = (numbers, target) => {
  let l = 0;
  let r = numbers.length - 1;

  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);

    if (target === numbers[m]) {
      return m;
    } else if (numbers[m] < target) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }

  return -1;
};

// Time complexity: O(log n)
// Space complexity: O(1)
