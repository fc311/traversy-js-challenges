function removeDuplicates(arr) {

  const uniques = []

  for (const item of arr) {
    if (!uniques.includes(item)) uniques.push(item)
  }

  return uniques
}

module.exports = removeDuplicates;
