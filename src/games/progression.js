import getRandomInt from '../utils.js';
import startGame, { NUMBER_OF_ROUNDS } from '../index.js';

const rule = 'What number is missing in the progression?';
const progressionLength = 10;

function getProgression(beginningOfProgression, progressionStep) {
  let iterationOfProgression = beginningOfProgression;
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
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

export default function progressionGame() {
  const answerAndQuestion = [];
  for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
    const iterationOfProgression = getRandomInt();
    const progressionStep = getRandomInt(1, 30);
    const progression = getProgression(iterationOfProgression, progressionStep);
    const replaceableIndex = getRandomInt(0, progressionLength - 1);
    const correctResult = progression[replaceableIndex].toString();
    const question = hideIndexInProgress(progression, replaceableIndex);
    answerAndQuestion.push([question, correctResult]);
  }
  startGame(rule, answerAndQuestion);
}
