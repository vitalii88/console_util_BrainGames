import { getRandomInt } from './functions.js';
import startGame from './index.js';
import { NUMBER_OF_ROUNDS } from './variables.js';

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
}

export default async function primeGame() {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  const answerAndQuestion = [];
  for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
    const question = getRandomInt();
    const correctResult = isPrime(question) === true ? 'yes' : 'no';
    answerAndQuestion.push([question, correctResult]);
  }
  const result = await startGame(rule, answerAndQuestion);
  return console.log(result);
}
