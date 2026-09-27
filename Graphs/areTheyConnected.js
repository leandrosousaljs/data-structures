import { Stack } from '../Stack/stack';

export const areTheyConnected = (names, adjacencyList) => {
  const visited = new Set();
  const unvisited = new Stack();

  unvisited.push(names[0]);

  while (!unvisited.isEmpty()) {
    const vertex = unvisited.pop();

    if (vertex === names[1]) return true;

    visited.add(vertex);

    for (const neighbor of adjacencyList[vertex]) if (!visited.has(neighbor)) unvisited.push(neighbor);
  }

  return false;
};
