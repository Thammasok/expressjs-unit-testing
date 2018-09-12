const sinon = require("sinon")

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
    console.log('Stub return: ', stubCallback.firstCall.args) // [ 'hello' ]
  })

  it('ทดสอบ stub วิธีการที่แตกต่างกัน โดยขึ้นอยู่กับอาร์กิวเมนต์', function () {
    stubCallback.withArgs(42).returns(1)

    console.log('No return value, no exception: ', stubCallback()) // No return value, no exception
    console.log('Returns 1: ', stubCallback(42)) // Returns 1
  })
})