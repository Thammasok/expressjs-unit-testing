const chai = require("chai")
const sinon = require("sinon")
const sinonChai = require("sinon-chai")

const func = require('../controllers/func')

chai.should()
chai.use(sinonChai)

var expect = chai.expect
var assert = chai.assert

describe("Hello Spy", function () {
  it("เมื่อเรียก function callback จะส่งข้อความ hello 007 ทักทายกลับ", function () {
    var cb = sinon.spy()
    func.hello("007", cb)
    cb.should.have.been.calledWith("hello 007")
  })

  it("สามารถเรียก Function hello2 ได้", function () {
    var hello2Spy = sinon.spy(func.hello2)
    hello2Spy()
    expect( hello2Spy.called ).to.be.equal(true)
  })
})

describe("Hello Addition Number Spy", function () {
  it("สามารถเรียก additionNumber พร้อมส่ง arguments 5, 7", function () {
    var additionNumberSpy = sinon.spy(func.additionNumber)
    additionNumberSpy(5, 7)
    additionNumberSpy.should.have.been.calledWith(5, 7)
  })

  it("สามารถเรียก additionNumber พร้อมส่ง arguments 5, 7 จะส่งค่า 12 กลับมา", function () {
    var additionNumberSpy = sinon.spy(func.additionNumber)
    additionNumberSpy(5, 7)
    additionNumberSpy.should.have.always.returned(12)
  })
})