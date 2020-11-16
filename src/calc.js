import startGame from './index.js';
import { getRandomArrElement, getRandomInt } from './functions.js';
import { MATH_ACTIONS, NUMBER_OF_ROUNDS } from './variables.js';

function getCorrectResult(x, y, action) {
  if (action === '+') return x + y;
  if (action === '-') return x - y;
  if (action === '*') return x * y;
  return false;
}

export default async function calcGame() {
  const rule = 'What is the result of the expression?';
  const answerAndQuestion = [];
  for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
    const x = getRandomInt();
    const y = getRandomInt();
    const action = getRandomArrElement(MATH_ACTIONS);
    const correctResult = getCorrectResult(x, y, action);
    const question = `Question: ${x} ${action} ${y} `;
    answerAndQuestion.push([question, correctResult]);
  }
  const result = await startGame(rule, answerAndQuestion);
  return console.log(result);
}
