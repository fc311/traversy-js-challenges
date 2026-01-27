function findMaxNumber(arr) {
  let max = arr[0]

  for (const num of arr) if (num > max) max = num

  return max

}

module.exports = findMaxNumber;
