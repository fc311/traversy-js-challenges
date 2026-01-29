function fizzBuzzArray(num) {

  const retArr = []

  for (let count = 1; count <= num; count++) {
    if (count % 3 == 0 && count % 5 == 0) retArr.push("FizzBuzz")
    else if (count % 3 == 0 && count % 5 != 0) retArr.push("Fizz")
    else if (count % 3 != 0 && count % 5 == 0) retArr.push("Buzz")
    else retArr.push(count)
  }

  return retArr
}

module.exports = fizzBuzzArray;
