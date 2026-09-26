export const theFriendliest = (names, adjacencyList) => {
  let friendliestIndex = 0;

  for (let i = 1; i < adjacencyList.length; i++) {
    if (adjacencyList[i].length > adjacencyList[friendliestIndex].length) {
      friendliestIndex = i;
    }
  }

  return names[friendliestIndex];
};
