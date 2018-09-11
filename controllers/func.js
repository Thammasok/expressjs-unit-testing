const hello = function (name, cb) {
  cb ("hello " + name)
}

const hello2 = function () {
  return "this message return from hello2 function."
}

module.exports = {
  hello,
  hello2
}