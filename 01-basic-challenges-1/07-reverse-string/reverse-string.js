function reverseString(str) {

  const returnStr = []

  for (let counter = str.length - 1; counter >= 0; counter--) {
    returnStr.push(str[counter])
  }

  return returnStr.join("")
}

module.exports = reverseString;
