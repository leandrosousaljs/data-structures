import { Stack } from './stack';

export const isValidExpression = (exp) => {
  if (exp.length === 0) return false;

  const stack = new Stack();

  for (const char of exp) {
    if (char === '<') {
      stack.push(char);
    } else if (char === '>') {
      if (!stack.isEmpty() && stack.peek() === '<') {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.isEmpty();
};

// Time complexity: O(n)
// Space complexity: O(n)
