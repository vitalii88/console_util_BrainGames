import { getRandomInt, isPrime } from '../lib/functions.js';
import startGame, { NUMBER_OF_ROUNDS } from '../index.js';

export default async function primeGame() {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  const answerAndQuestion = [];
  for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
    const question = getRandomInt();
    const correctResult = isPrime(question) === true ? 'yes' : 'no';
    answerAndQuestion.push([question, correctResult]);
  }
  startGame(rule, answerAndQuestion);
}
