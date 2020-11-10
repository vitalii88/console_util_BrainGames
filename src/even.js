import promptly from 'promptly';

function getRandomInt(minRange, maxRage) {
  const min = Math.ceil(minRange);
  const max = Math.floor(maxRage);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getCorrectResult(rundomNumber) {
  return rundomNumber % 2 === 0 ? 'yes' : 'no';
}

const evenGame = async () => {
  const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';
  const round = 3;
  console.log('Welcome to the Brain Games!');
  const name = await promptly.prompt('May I have your name? ');
  console.log('Hello ', name, '!');

  console.log(gameRule);
  for (let i = 0; i < round; i += 1) {
    const question = getRandomInt(1, 101);
    const correctResult = getCorrectResult(question);
    console.log('Question: ', question);
    const userAnswer = await promptly.prompt('Your answer: ');
    if (userAnswer === correctResult) {
      console.log('Correct!');
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctResult}'`);
    }
  }
  return console.log(`Congratulations ${name}!`);
};

export default evenGame;
