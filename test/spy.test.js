const chai = require("chai")
const sinon = require("sinon")
const sinonChai = require("sinon-chai")

const func = require('../controllers/func')

chai.should()
chai.use(sinonChai)

var expect = chai.expect
var assert = chai.assert

describe("Hello Spy", () => {
  it("Should return 'hello 007' when calling the callback function", () => {
    var cb = sinon.spy()
    func.hello("007", cb)
    cb.should.have.been.calledWith("hello 007")
  })

  it("Should called hello2 Function", () => {
    var hello2Spy = sinon.spy(func.hello2)
    hello2Spy()
    expect( hello2Spy.called ).to.be.equal(true)
  })
})

describe("Hello Addition Number Spy", () => {
  it("Should be called when calling additionNumber function with send arguments 5, 7", () => {
    var additionNumberSpy = sinon.spy(func.additionNumber)
    additionNumberSpy(5, 7)
    additionNumberSpy.should.have.been.calledWith(5, 7)
  })

  it("Should return 12 when calling additionNumber function with send arguments 5, 7", () => {
    var additionNumberSpy = sinon.spy(func.additionNumber)
    additionNumberSpy(5, 7)
    additionNumberSpy.should.have.always.returned(12)
  })
})