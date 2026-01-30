function findMissingNumber(arr) {

  if (arr.length === 0) return 1
  if (!arr) return undefined

  arr.sort((l, m) => l - m)

  const n = arr[arr.length - 1]

  for (let num = 1; num <= n; num++) {
    if (!arr.includes(num)) return num
  }

}

module.exports = findMissingNumber;
