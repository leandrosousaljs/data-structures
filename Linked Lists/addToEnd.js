import { Node } from './node';

export const addToEndUsingTail = (head, tail, value) => {
  const node = new Node(value);

  if (head === null) {
    head = node;
  } else {
    tail.next = node;
  }

  return head;
};
