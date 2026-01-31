function areAllCharactersUnique(str) {

  const charUnique = {}

  for (const char of str) {
    if (charUnique[char]) return false
    charUnique[char] = true
  }

  return true
}

module.exports = areAllCharactersUnique;
