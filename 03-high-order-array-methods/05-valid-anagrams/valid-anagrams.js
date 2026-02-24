function validAnagrams(str1, str2) {

  const sortedString1 = str1.split("").sort().join("")
  const sortedString2 = str2.split("").sort().join("")

  return sortedString1 === sortedString2

}

module.exports = validAnagrams;
