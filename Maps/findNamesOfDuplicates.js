export const findNamesOfDuplicates = (people) => {
  const dupes = [];
  const idNames = new Map();

  for (const { id, name } of people) {
    if (idNames.has(id)) {
      dupes.push(idNames.get(id));
      dupes.push(name);
    } else {
      idNames.set(id, name);
    }
  }

  return dupes;
};
