import { getRandomInt, getProgression } from '../lib/functions.js';
import startGame, { NUMBER_OF_ROUNDS } from '../index.js';

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
  startGame(rule, answerAndQuestion);
}
