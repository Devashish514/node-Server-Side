// we will write unit test using core module "assert"

const assert = require('assert');
let actualValue = 2 + 5;
let expectedValue = 7;

assert.strictEqual(actualValue, expectedValue);  //if test case is passed nothing happens 

// otherwise :
// AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:

// 7 !== 47

//example 2..

let actual = 0.1 + 0.2;
let expected = 0.3

assert.strictEqual(actual, expected);

//AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:
// + actual - expected

// + 0.30000000000000004
// - 0.3


//we can also give custom error message...

assert.strictEqual(actual, expected, "take care of maths in javaScript..!!");
//AssertionError [ERR_ASSERTION]: take care of maths in javaScript..!!