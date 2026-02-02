function validateEmail(email) {

  const splitAt = email.split('@')

  if (splitAt.length === 2) {
    if (splitAt[0].length > 0 && splitAt[1].includes(".")) {
      return true
    }
  }
  return false

}

module.exports = validateEmail;
