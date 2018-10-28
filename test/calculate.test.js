const chai = require("chai")
const sinon = require("sinon")

const expect = chai.expect

const calculate = require("../controllers/calculate")
const calculateFunction = require("../controllers/calculate/func")

describe('Calculate mocking Demo', () => { 
  it("mocks function", () => {
    var calculateFunctionMock = sinon.mock(calculateFunction)

    calculateFunctionMock.expects("getNumber").once().returns(10)
  
    const answer = calculate.sum(5)

    expect(answer).to.equal(15)
    
    calculateFunctionMock.verify()
  })
})