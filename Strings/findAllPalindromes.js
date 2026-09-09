export const findAllPalindromes = (usernames) => usernames.filter(isPalindrome);

const isPalindrome = (username) => {
  const string = username.toLowerCase();

  let left = 0;
  let right = string.length - 1;

  while (left < right) {
    if (string[left] !== string[right]) return false;

    left++;
    right--;
  }

  return true;
};

// Time complexity: O(n * k)
// Space complexity: O(n + k)
