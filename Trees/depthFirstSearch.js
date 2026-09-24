import { Stack } from '../Stack/stack';

export const depthFirstSearch = (root, target) => {
  const notVisited = new Stack();

  if (root !== null) {
    notVisited.push(root);
  }

  while (!notVisited.isEmpty()) {
    const node = notVisited.pop();

    if (target === node.value) {
      return true;
    }

    if (node.right !== null) {
      notVisited.push(node.right);
    }

    if (node.left !== null) {
      notVisited.push(node.left);
    }
  }

  return false;
};
