import promptly from 'promptly';

const startGame = async () => {
  const name = await promptly.prompt('Welcome to the Brain Games! \nMay I have your name? ');
  return console.log('Hello, ', name, '!');
};
export default startGame;
