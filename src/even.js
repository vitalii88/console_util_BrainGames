import promptly from 'promptly';
import { getRandomInt } from './functions.js';

function getCorrectResult(rundomNumber) {
  return rundomNumber % 2 === 0 ? 'yes' : 'no';
}

async function evenGame(name) {
  const question = getRandomInt();
  const correctResult = getCorrectResult(question);
  console.log('Question: ', question);
  const userAnswer = await promptly.prompt('Your answer: ');
  if (String(userAnswer) !== String(correctResult)) {
    return `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctResult}'\nLet's try again, ${name}`;
  }
  return 'Correct!';
}
export default evenGame;
