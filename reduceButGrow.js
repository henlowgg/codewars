// Given a non-empty array of integers, return the result of multiplying the values together in order.
// Example:

//  [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// Solution

// Taking the numbers in an array 1 by 1 and multiplying them

function grow(x){
    let result = 1;
    for (let i = 0; i < x.length; i++) {
        result *= x[i]
    }
    return result
}

// Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests",() =>{
  it("Testing for fixed tests", () => {  
    assert.strictEqual(grow([1, 2, 3]), 6);
    assert.strictEqual(grow([4, 1, 1, 1, 4]), 16); 
    assert.strictEqual(grow([2, 2, 2, 2, 2, 2]), 64); 
  });
})