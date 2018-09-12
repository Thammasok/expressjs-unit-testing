const sinon = require("sinon")
const chai = require("chai")

const expect = chai.expect

const func = require('../controllers/func')

describe("Hello Stubs", function () {
  var stubCallback
  beforeEach(() => {
    stubCallback = sinon.stub()
  })

  afterEach(() => {
    stubCallback.resetBehavior()
  })

  it("สามารถเรียก ใช้งาน Stub ได้", function () {
    stubCallback('hello')
    // console.log('Stub return: ', stubCallback.firstCall.args) // [ 'hello' ]
    expect(stubCallback.firstCall.args).to.have.lengthOf(1)
    expect(stubCallback.firstCall.args[0]).to.equal('hello')
  })

  it('ทดสอบ stub วิธีการที่แตกต่างกัน โดยขึ้นอยู่กับอาร์กิวเมนต์', function () {
    stubCallback.withArgs(42).returns(1)

    // console.log('No return value, no exception: ', stubCallback()) // No return value, no exception
    // console.log('Returns 1: ', stubCallback(42)) // Returns 1
    expect(stubCallback()).to.equal(undefined)
    expect(stubCallback(42)).to.equal(1)
  })

  it('ทดสอบ stub additionNumber Return 7', function () {
    stubCallback(func, 'additionNumber')

    stubCallback.withArgs(5, 2).returns(7)
    // console.log('Returns : ', stubCallback(5, 2))
    expect(stubCallback(5, 2)).to.equal(7)
  })
})