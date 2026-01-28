function titleCase(str) {
  const words = str.toLowerCase().split(" ")

  let returnSentence = [];

  for (const word of words) {
    const letters = word.split("")
    letters[0] = letters[0].toUpperCase()

    returnSentence.push(letters.join(""))
  }

  return returnSentence.join(" ")
}

module.exports = titleCase;
