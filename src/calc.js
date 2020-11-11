import promptly from 'promptly';
import { getRandomArrElement, getRandomInt } from './functions.js';
import { MATH_ACTIONS } from './variables.js';

function getCorrectResult(x, y, action) {
  if (action === '+') return x + y;
  if (action === '-') return x - y;
  if (action === '*') return x * y;
  return false;
}

async function calcGame(name) {
  const x = getRandomInt();
  const y = getRandomInt();
  const action = getRandomArrElement(MATH_ACTIONS);
  const correctResult = getCorrectResult(x, y, action);
  const question = `Question: ${x} ${action} ${y} `;
  console.log(question);
  const userAnswer = await promptly.prompt('Your answer: ');
  if (String(userAnswer) !== String(correctResult)) {
    return `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctResult}'\nLet's try again, ${name}`;
  }
  return 'Correct!';
}
export default calcGame;
