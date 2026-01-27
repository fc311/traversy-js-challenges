function calculator(a, b, op) {

  // USING eval:
  // const constraints = ["+", "-", "*", "/"]
  // if (!constraints.includes(op)) throw Error("Invalid Operator")
  // return eval(`${a} ${op} ${b}`)

  // USING no eval, only `switch` statement:
  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
    default:
      throw new Error("Invalid Operator");
  }

}

module.exports = calculator;
