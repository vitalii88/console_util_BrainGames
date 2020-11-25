import startGame, { NUMBER_OF_ROUNDS } from '../index.js';
import { getRandomInt } from '../lib/functions.js';

function getCorrectResult(x, y, action) {
  if (action === '+') return x + y;
  if (action === '-') return x - y;
  if (action === '*') return x * y;
  return false;
}

export default async function calcGame() {
  const mathActions = ['+', '-', '*'];
  const rule = 'What is the result of the expression?';
  const answerAndQuestion = [];
  for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
    const x = getRandomInt();
    const y = getRandomInt();
    const action = mathActions[getRandomInt(0, mathActions.length)];
    const correctResult = getCorrectResult(x, y, action);
    const question = `Question: ${x} ${action} ${y} `;
    answerAndQuestion.push([question, correctResult]);
  }
  startGame(rule, answerAndQuestion);
}
