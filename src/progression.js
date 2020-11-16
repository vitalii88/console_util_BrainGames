import { getRandomInt } from './functions.js';
import { NUMBER_OF_ROUNDS } from './variables.js';
import startGame from './index.js';

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

export default async function progressionGame() {
  const rule = 'What number is missing in the progression?';
  const answerAndQuestion = [];
  for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
    const progression = getProgression();
    const replaceableIndex = getRandomInt(0, 9);
    const correctResult = progression[replaceableIndex];
    const question = hideIndexInProgress(progression, replaceableIndex);
    answerAndQuestion.push([question, correctResult]);
  }
  const result = await startGame(rule, answerAndQuestion);
  return console.log(result);
}
