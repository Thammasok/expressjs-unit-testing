const func = require("./func")

const sum = (number) => {
  let numberTwo = func.getNumber()

  return number + numberTwo
}

module.exports = {
  sum
}