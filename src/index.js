import promptly from 'promptly';
import calcGame from './calc.js';
import evenGame from './even.js';
import { ARR_OF_RULES, NUMBER_OF_ROUNDS } from './variables.js';
import { getRule } from './functions.js';

const startGame = async (gameName) => {
  console.log('Welcome to the Brain Games!');
  const name = await promptly.prompt('May I have your name? ');
  console.log('Hello ', name, '!');
  console.log(getRule(gameName, ARR_OF_RULES));
  let result = '';
  for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
    switch (gameName) {
      case 'calc':
        result = await calcGame(name);
        break;
      case 'even':
        result = await evenGame(name);
        break;
      default:
        return false;
    }
    if (result !== 'Correct!') {
      return console.log(result);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations ${name}!`);
};
export default startGame;
