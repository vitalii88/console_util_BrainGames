import promptly from 'promptly';
import { getRandomInt } from './functions.js';

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
}

export default async function primeGame(name) {
  const question = getRandomInt();
  const correctResult = isPrime(question) === true ? 'yes' : 'no';
  console.log('Question: ', question);
  const userAnswer = await promptly.prompt('Your answer: ');
  if (String(userAnswer) !== String(correctResult)) {
    return `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctResult}'\nLet's try again, ${name}`;
  }
  return 'Correct!';
}
