// const assert = require('assert')
const expect = require('chai').expect

const {twoSumBigOnSquared} = require('../controllers/twoSum')

describe('Hello Chai > TwoSum แบบ Big O n^2', () => {
  let nums = [1,2,3,4,5]
  let target = 0

  // beforeEach(() => {
  //   // Clear
  //   nums = []
  //   target = 0
  // })
  
  it('Should return false when calling function with send nums = [] and target = 0', () => {
    const result = twoSumBigOnSquared([], target)
    
    //Assert
    expect(false).to.be.equal(result)
  })

  it(`Should return array length 2 when calling function with send nums = [${nums}] and target = 6`, () => {
    target = 6
    
    const result = twoSumBigOnSquared(nums, target)

    expect(result).to.be.have.lengthOf(2)
  })

  it(`Should return [3,4] when calling function with send nums = [${nums}] and target = 9`, () => {
    target = 9
    
    const result = twoSumBigOnSquared(nums, target)

    expect(result[0]).to.equal(3)
    expect(result[1]).to.equal(4)
  })

  it(`Should return false when calling function with send nums = [${nums}] and target = 15`, () => {
    target = 15
    
    const result = twoSumBigOnSquared(nums, target)

    expect(result).to.equal(false)
  })

})