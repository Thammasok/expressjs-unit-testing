const chai = require("chai")
const sinon = require("sinon")
const sinonChai = require("sinon-chai")

const { hello, hello2 } = require('../controllers/func')

chai.should()
chai.use(sinonChai)

var expect = chai.expect;

describe("Hello Spy", function () {
  it("should call callback with correct greeting", function () {
    var cb = sinon.spy()
    hello("foo", cb)
    cb.should.have.been.calledWith("hello foo")
  })

  it("should call hello2 with correct", function () {
    var hello2Spy = sinon.spy(hello2)
    hello2Spy()
    expect( hello2Spy.called ).to.be.equal(true)
  })
})