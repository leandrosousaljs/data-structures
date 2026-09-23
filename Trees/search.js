export const search = (root, target) => {
  if (root === null) {
    return false;
  }

  if (root.value === target) {
    return true;
  }

  if (target < root.value) {
    return search(root.left, target);
  }

  if (target > root.value) {
    return search(root.right, target);
  }
};
