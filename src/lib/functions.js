function getRandomInt(minRange = 1, maxRage = 100) {
  const min = Math.ceil(minRange);
  const max = Math.floor(maxRage);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomArrElement(arrayOfElements) {
  return arrayOfElements[Math.floor(Math.random() * arrayOfElements.length)];
}

function getRule(gameName, arrOfRules) {
  let ruleText = '';
  for (let i = 0; i < arrOfRules.length; i += 1) {
    const [game, rule] = arrOfRules[i];
    if (game === gameName) ruleText = rule;
  }
  return ruleText;
}

export { getRandomInt, getRandomArrElement, getRule };
