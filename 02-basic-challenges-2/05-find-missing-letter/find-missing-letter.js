function findMissingLetter(arr) {

  const firstCharCode = arr[0].charCodeAt(0)

  for (let count = 1; count < arr.length; count++) {
    const expectedCharCode = firstCharCode + count

    const actualCharCode = arr[count].charCodeAt(0)

    if (expectedCharCode !== actualCharCode) {
      return String.fromCharCode(expectedCharCode)
    }
  }

}

module.exports = findMissingLetter;
