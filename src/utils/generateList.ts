export function numbersRandom(list: Set<number>, quantity: number) {
  let listSize = list.size;

  while (listSize < quantity) {
    const number = Math.floor(Math.random() * 10 + 1);

    if (!list.has(number)) {
      list.add(number);
    }
    listSize++;
  }
}
