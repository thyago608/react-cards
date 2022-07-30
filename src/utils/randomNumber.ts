export const randomNumbersList = new Array<number>();

export function generateRandomNumber() {
  for (let i = 0; i < 10; i++) {
    randomNumbersList[i] = i + 1;
  }

  let randomNumber;
  let tmp;

  for (let i = randomNumbersList.length; i; ) {
    randomNumber = (Math.random() * i--) | 0;
    tmp = randomNumbersList[randomNumber];
    randomNumbersList[randomNumber] = randomNumbersList[i];
    randomNumbersList[i] = tmp;
  }
}
