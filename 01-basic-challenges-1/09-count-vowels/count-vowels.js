function countVowels(str) {
  let count = 0;

  for (const letter of str) {
    if (["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"
    ].includes(letter)) count++
  }

  return count
}



module.exports = countVowels;
