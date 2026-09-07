export const findAllPalindromes = (usernames) => {
  const result = [];

  for (const username of usernames) {
    const chars = username.split('');
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

    if (reversed.toLowerCase() === username.toLowerCase()) {
      result.push(username);
    }
  }

  return result;
};
