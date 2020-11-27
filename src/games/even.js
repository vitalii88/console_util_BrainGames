import getRandomInt from '../utils.js';
import startGame, { NUMBER_OF_ROUNDS } from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

function getCorrectResult(rundomNumber) {
  return isEven(rundomNumber) ? 'yes' : 'no';
}

export default function evenGame() {
  const answerAndQuestion = [];
  for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
    const question = getRandomInt();
    const correctResult = getCorrectResult(question);
    answerAndQuestion.push([question, correctResult]);
  }
  startGame(rule, answerAndQuestion);
}
