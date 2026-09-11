export const mergeSort = (numbers) => {
  if (numbers.length <= 1) return numbers;

  const mid = Math.floor(numbers.length / 2);
  const leftHalf = numbers.slice(0, mid);
  const rightHalf = numbers.slice(mid);

  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);

  return merge(sortedLeft, sortedRight);
};

const merge = (leftHalf, rightHalf) => {
  const result = [];

  let leftPointer = 0;
  let rightPointer = 0;

  while (leftPointer < leftHalf.length && rightPointer < rightHalf.length) {
    if (leftHalf[leftPointer] < rightHalf[rightPointer]) {
      result.push(leftHalf[leftPointer]);
      leftPointer++;
    } else {
      result.push(rightHalf[rightPointer]);
      rightPointer++;
    }
  }

  while (leftPointer < leftHalf.length) {
    result.push(leftHalf[leftPointer]);
    leftPointer++;
  }

  while (rightPointer < rightHalf.length) {
    result.push(rightHalf[rightPointer]);
    rightPointer++;
  }

  return result;
};
