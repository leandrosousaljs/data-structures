import { Queue } from '../Queues/queue';

export const breadthFirstSearch = (root, target) => {
  const notVisited = new Queue();

  if (root !== null) {
    notVisited.enqueue(root);
  }

  while (!notVisited.isEmpty()) {
    const node = notVisited.dequeue();

    if (target === node.value) {
      return true;
    }

    if (node.left !== null) {
      notVisited.enqueue(node.left)
    }

    if (node.right !== null) {
      notVisited.enqueue(node.right);
    }
  }

  return false;
};
