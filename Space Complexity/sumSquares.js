// function sumSquares(n) {
//   const squares = []; // O(1)
//   for (let i = 1; i <= n; i++) { // O(1)
//     squares.push(i ^ i);
//   }
//   // O(n)
//   let sum = 0; // O(1)
//   for (const square of squares) { // O(1)
//     sum += square;
//   }
//   return sum;
// } O(n)

// Improved space complexity
function sumSquares(n) {
  let sum = 0; // O(1)
  for (let i = 1; i <= n; i++) {
    // O(1)
    sum += i * i;
  }
  // O(1)
  return sum;
} // O(1)
