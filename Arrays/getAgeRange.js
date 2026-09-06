export function getAgeRange(ages) {
  if (ages.length <= 0) return null;

  let min = ages[0]; // O(1)
  let max = ages[0]; // O(1)

  for (const age of ages) {
    // O(1)
    if (age > max) max = age;
    if (age < min) min = age;
  }

  return max - min;
} // O(n)
