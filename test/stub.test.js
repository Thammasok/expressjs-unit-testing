const sinon = require("sinon")
const chai = require("chai")

const expect = chai.expect

const func = require('../controllers/func')

describe("Hello Stubs", () => {
  var stubCallback
  beforeEach(() => {
    stubCallback = sinon.stub()
  })

  afterEach(() => {
    stubCallback.resetBehavior()
  })

  it("Should call stub", () => {
    stubCallback('hello')
    // console.log('Stub return: ', stubCallback.firstCall.args) // [ 'hello' ]
    expect(stubCallback.firstCall.args).to.have.lengthOf(1)
    expect(stubCallback.firstCall.args[0]).to.equal('hello')
  })

  it('Test call Stub with difference agreement', () => {
    stubCallback.withArgs(42).returns(1)

    // console.log('No return value, no exception: ', stubCallback()) // No return value, no exception
    // console.log('Returns 1: ', stubCallback(42)) // Returns 1
    expect(stubCallback()).to.equal(undefined)
    expect(stubCallback(42)).to.equal(1)
  })

  it('Should return 7 when called stub additionNumber', () => {
    stubCallback(func, 'additionNumber')

    stubCallback.withArgs(5, 2).returns(7)
    // console.log('Returns : ', stubCallback(5, 2))
    expect(stubCallback(5, 2)).to.equal(7)
  })
})