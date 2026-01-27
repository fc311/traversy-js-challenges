function countOccurrences(str, char) {
  // const charDictionary = {}

  // for (const letter of str) {
  //   if charDictionary[letter] {
  //     charDictionary[letter]++
  //   } else charDictionary[letter] = 1
  // }

  // return charDictionary[char]

  let count = 0;

  for (const letter of str) if (letter === char) count++;

  return count;

}

module.exports = countOccurrences;
