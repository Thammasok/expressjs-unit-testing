// const assert = require('assert');

describe('Show sequence calling Function in Mocha', () => {
  beforeEach(() => {
    // beforeEach ทุก Test case เราจะเข้า function นี้ก่อนเสมอ
    console.log('2. beforeEach: ทุก Test case เราจะเข้า function นี้ก่อนเสมอ')
  });
  
  before(() => {
    // before คือ เราจะทำ function นี่ก่อนทำ Test case ครั้งแรกครั้งเดียว
    console.log('1. before: จะทำ function นี่ก่อนทำ Test case ครั้งแรกครั้งเดียว')
  });

  afterEach(() => {
    // afterEach เมื่อจบ Test case แต่ละ Test case เราจะทำ function นี้
    console.log('4. afterEach: เมื่อจบ Test case แต่ละ Test case เราจะทำ function นี้')
  });

  after(() => {
    // after เมื่อจบทุก Test case ถึงจะทำ function นี้
    console.log('6. after: เมื่อจบทุก Test case ถึงจะทำ function นี้')
  });

  it('Test case: 1', () => {
    // test case
    console.log('3. it 1')
  });

  it('Test case: 2', () => {
    // test case
    console.log('5. it 2')
  });
});