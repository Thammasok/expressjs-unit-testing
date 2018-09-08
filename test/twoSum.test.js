// const assert = require('assert')
const expect = require('chai').expect

const {twoSumBigOnSquared} = require('../controllers/twoSum')

describe('TwoSum แบบ Big O n^2', () => {
  let nums = [1,2,3,4,5]
  let target = 0

  // beforeEach(() => {
  //   // Clear
  //   nums = []
  //   target = 0
  // })
  
  it('ส่งค่า nums = [] และ target = 0 ไป ต้อง Return false', () => {
    const result = twoSumBigOnSquared([], target)
    
    //Assert
    expect(false).to.be.equal(result)
  })

  it(`ส่งค่า nums = [${nums}] และ target = 6 ไป ต้อง Return array length 2`, () => {
    target = 6
    
    const result = twoSumBigOnSquared(nums, target)

    expect(result).to.be.have.lengthOf(2)
  })

  it(`ส่งค่า nums = [${nums}] และ target = 9 ไป ต้อง Return [3,4]`, () => {
    target = 9
    
    const result = twoSumBigOnSquared(nums, target)

    expect(result[0]).to.equal(3)
    expect(result[1]).to.equal(4)
  })

  it(`ส่งค่า nums = [${nums}] และ target = 15 ไป ต้อง Return false`, () => {
    target = 15
    
    const result = twoSumBigOnSquared(nums, target)

    expect(result).to.equal(false)
  })

})