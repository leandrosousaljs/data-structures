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

export const addToEndUsingHead = (head, value) => {
  const node = new Node(value);

  let tail = head;

  if (head !== null) {
    while (tail.next !== null) {
      tail = tail.next;
    }
  }

  return addToEndUsingTail(head, tail, value);
};
