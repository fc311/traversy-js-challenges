function formatPhoneNumber(number) {

  const first = number.slice(0, 3).join("")
  const middle = number.slice(3, 6).join("")
  const last = number.slice(6,).join("")

  return `(${first}) ${middle}-${last}`

}

module.exports = formatPhoneNumber;
