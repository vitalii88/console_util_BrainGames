import promptly from 'promptly';
import { getRandomInt } from './functions.js';

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

async function gcdGame(name) {
  const randomX = getRandomInt();
  const randomY = getRandomInt();
  const correctResult = getGcd(randomX, randomY);
  console.log(`Question: ${randomX} ${randomY}`);
  const userAnswer = await promptly.prompt('Your answer: ');
  if (String(userAnswer) !== String(correctResult)) {
    return `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctResult}'\nLet's try again, ${name}`;
  }
  return 'Correct!';
}
export default gcdGame;
