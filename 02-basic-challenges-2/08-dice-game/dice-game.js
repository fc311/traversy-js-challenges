
const singleRoll = () => {
  const dice1 = Math.ceil(Math.random() * 5)
  const dice2 = Math.ceil(Math.random() * 5)

  const sum = dice1 + dice2

  let result

  if (sum === 7 || sum === 11) result = "win"
  else if (sum === 2 || sum === 3 || sum === 12) result = "lose"
  else result = "roll again"

  return {
    dice1,
    dice2,
    sum,
    result
  }
}


function diceGameSimulation(numSimulations) {

  const retArr = []

  for (let count = 0; count < numSimulations; count++) {
    retArr.push(singleRoll())
  }

  return retArr
}

module.exports = diceGameSimulation;
