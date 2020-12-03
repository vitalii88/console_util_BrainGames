import promptly from 'promptly';

const NUMBER_OF_ROUNDS = 3;

export default async function startGame(rule, answerAdnQuestion) {
  console.log('Welcome to the Brain Games!');
  const name = await promptly.prompt('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rule);
  for (let i = 0; i < answerAdnQuestion.length; i += 1) {
    const [question, correctResult] = answerAdnQuestion[i];
    console.log('Question:', question);
    const userAnswer = await promptly.prompt('Your answer: ');
    if (userAnswer !== correctResult) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctResult}'`);
      console.log(`Let's try again, ${name}!`);
      return false;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
  return true;
}
export { NUMBER_OF_ROUNDS };
