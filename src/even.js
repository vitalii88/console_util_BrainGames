// import promptly from 'promptly';
import { getRandomInt } from './functions.js';
import { NUMBER_OF_ROUNDS } from './variables.js';
import startGame from './index.js';

function getCorrectResult(rundomNumber) {
  return rundomNumber % 2 === 0 ? 'yes' : 'no';
}

export default async function evenGame() {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  const answerAndQuestion = [];
  for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
    const question = getRandomInt();
    const correctResult = getCorrectResult(question);
    answerAndQuestion.push([question, correctResult]);
  }
  // console.log(answerAdnQuestion);
  const result = await startGame(rule, answerAndQuestion);
  return console.log(result);
}
