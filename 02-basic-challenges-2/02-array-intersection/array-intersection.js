function arrayIntersection(arr1, arr2) {

  const retArr = []

  for (const ele of arr1) {
    if (arr2.includes(ele) && !retArr.includes(ele)) retArr.push(ele)
  }

  return retArr
}

module.exports = arrayIntersection;
