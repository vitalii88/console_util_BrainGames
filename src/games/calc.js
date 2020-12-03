import startGame, { NUMBER_OF_ROUNDS } from '../index.js';
import getRandomInt from '../utils.js';

const rule = 'What is the result of the expression?';

function getCorrectResult(x, y, operator) {
  switch (operator) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
}

export default function calcGame() {
  const mathActions = ['+', '-', '*'];
  const answerAndQuestion = [];
  for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
    const x = getRandomInt();
    const y = getRandomInt();
    const action = mathActions[getRandomInt(0, mathActions.length)];
    const correctResult = getCorrectResult(x, y, action).toString();
    const question = `Question: ${x} ${action} ${y} `;
    answerAndQuestion.push([question, correctResult]);
  }
  startGame(rule, answerAndQuestion);
}
