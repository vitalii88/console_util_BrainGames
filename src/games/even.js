import { getRandomInt, isEven } from '../lib/functions.js';
import startGame, { NUMBER_OF_ROUNDS } from '../index.js';

function getCorrectResult(rundomNumber) {
  return isEven(rundomNumber) ? 'yes' : 'no';
}

export default async function evenGame() {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  const answerAndQuestion = [];
  for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
    const question = getRandomInt();
    const correctResult = getCorrectResult(question);
    answerAndQuestion.push([question, correctResult]);
  }
  startGame(rule, answerAndQuestion);
}
