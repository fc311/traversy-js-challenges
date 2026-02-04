function sumOfEvenSquares(numbers) {

  const final = numbers.reduce((acc, item) => {
    if (item % 2 === 0) {
      return acc + (item * item)
    }
    return acc + 0
  }, 0)

  return final
}

module.exports = sumOfEvenSquares;
