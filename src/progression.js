import promptly from 'promptly';
import { getRandomInt } from './functions.js';

function getProgression() {
  let iterationOfProgression = getRandomInt();
  const progressionStep = getRandomInt(1, 30);
  const progressionLenght = 10;
  const progression = [];
  for (let i = 0; i < progressionLenght; i += 1) {
    progression.push(iterationOfProgression);
    iterationOfProgression += progressionStep;
  }
  return progression;
}

function hideIndexInProgress(arr, index) {
  const holder = '..';
  const progression = arr.slice();
  progression[index] = holder;
  return progression.join(' ');
}

export default async function progressionGame(name) {
  const progression = getProgression();

  const replaceableIndex = getRandomInt(0, 9);
  const correctResult = progression[replaceableIndex];
  const question = hideIndexInProgress(progression, replaceableIndex);
  console.log('Question: ', question);
  const userAnswer = await promptly.prompt('Your answer: ');
  if (String(userAnswer) !== String(correctResult)) {
    return `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctResult}'\nLet's try again, ${name}`;
  }
  return 'Correct!';
}
