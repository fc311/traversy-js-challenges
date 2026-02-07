const wordToScore = (word) => {
  const score = word
    .split('')
    .map(char => char.charCodeAt(0))
    .reduce((sum, points) => sum + (points - 96), 0)

  return score
}

function highestScoringWord(str) {

  const words = str.split(" ")
  const scores = words.map(wordToScore)

  // let highestScoringIndex = 0

  // for (let count = 1; count < scores.length; count++) {
  //   if (scores[count] > scores[highestScoringIndex]) {
  //     highestScoringIndex = count
  //   }
  // }

  // return words[highestScoringIndex]

  const highestScore = Math.max(...scores)
  const highestIndex = scores.indexOf(highestScore)

  return words[highestIndex]

}

module.exports = highestScoringWord;
