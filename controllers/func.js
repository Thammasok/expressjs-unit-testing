const hello = function (name, cb) {
  cb ("hello " + name)
}

const hello2 = function () {
  return "this message return from hello2 function."
}

const additionNumber = function (numberOne, numberTwo) {
  return numberOne + numberTwo
}

module.exports = {
  hello,
  hello2,
  additionNumber
}