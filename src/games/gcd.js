import { getRandomInt } from '../lib/functions.js';
import startGame, { NUMBER_OF_ROUNDS } from '../index.js';

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
  startGame(rule, answerAndQuestion);
}
