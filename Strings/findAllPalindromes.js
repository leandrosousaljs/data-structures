export const findAllPalindromes = (usernames) => {
  const result = [];

  for (const username of usernames) {
    if (isPalindrome(username)) {
      result.push(username);
    }
  }

  return result;
};

const isPalindrome = (username) => {
  const reversed = reverse(username);
  const result = username.toLowerCase() === reversed.toLowerCase();

  return result;
};

const reverse = (string) => {
  const chars = string.split('');
  let left = 0;
  let right = chars.length - 1;

  while (left < right) {
    const temp = chars[left];
    chars[left] = chars[right];
    chars[right] = temp;
    left++;
    right--;
  }

  const reversed = chars.join('');
  return reversed;
};

// Time complexity: O(n * k)
// Space complexity: O(n * k)