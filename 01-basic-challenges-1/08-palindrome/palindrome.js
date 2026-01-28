function isPalindrome(str) {
  const cleanedUpStr = str.toLowerCase().replace(/[^a-z0-9]/g, "")
  const backward = cleanedUpStr.split("").reverse().join("")

  return cleanedUpStr === backward
}

module.exports = isPalindrome;
