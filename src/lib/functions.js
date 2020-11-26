function getRandomInt(minRange = 1, maxRage = 100) {
  const min = Math.ceil(minRange);
  const max = Math.floor(maxRage);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getGcd(x, y) {
  let numX = x;
  let numY = y;
  while (numX !== numY) {
    if (numX > numY) {
      numX -= numY;
    } else {
      numY -= numX;
    }
  }
  return numX;
}

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
}
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

const getSum = (x, y) => x + y;

const getDifference = (x, y) => x - y;

const getMultiplication = (x, y) => x * y;

const isEven = (number) => number % 2 === 0;

export {
  getRandomInt, getSum, getDifference, getMultiplication, isEven, getGcd, isPrime, getProgression,
};
