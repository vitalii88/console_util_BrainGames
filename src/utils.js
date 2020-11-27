function getRandomInt(minRange = 1, maxRage = 100) {
  const min = Math.ceil(minRange);
  const max = Math.floor(maxRage);
  return Math.floor(Math.random() * (max - min)) + min;
}

export default getRandomInt;
