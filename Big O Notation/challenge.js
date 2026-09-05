function sum(n) {
  let sum = 0;
  for (let num = 1; num <= n; num++) {
    sum += num;
  }
  return sum;
} // Time complexity: O(n)

function printMultiplicationTable(n) {
  for (let a = 0; a < n; a++) {
    for (let b = 1; b <= n; b++) {
      console.log(`${a} x ${b} = ${a * b}`);
    }
  }
} // Time complexity: O(n^2)

function isPositive(n) {
  return n > 0;
} // Time complexity: O(1)

function printTriangle() {
  for (let row = 1; row <= 5; row++) {
    let line = '';
    for (let col = 1; col <= row; col++) {
      line += '* ';
    }
    console.log(line);
  }
} // Time complexity: O(1)
