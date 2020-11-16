import { getRandomInt } from './functions.js';
import { NUMBER_OF_ROUNDS } from './variables.js';
import startGame from './index.js';

function getGcd(x, y) {
  let numX = x;
  let numY = y;
  while (numX !== numY) {
    if (numX > numY) {
      numX -= numY;
    } else {
      numY -= numX;
    }
  }
  return numX;
}

export default async function gcdGame() {
  const rule = 'Find the greatest common divisor of given numbers.';
  const answerAndQuestion = [];
  for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
    const randomX = getRandomInt();
    const randomY = getRandomInt();
    const correctResult = getGcd(randomX, randomY);
    const question = `Question: ${randomX} ${randomY}`;
    answerAndQuestion.push([question, correctResult]);
  }
  // console.log(answerAndQuestion);
  const result = await startGame(rule, answerAndQuestion);
  return console.log(result);
}
