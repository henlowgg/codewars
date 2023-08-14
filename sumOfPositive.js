// Sum of Positive 8 KYU

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// Solution

// First filter all the positive numbers, only the numbers greater than 0
// once you have that, use .reduce (aka find the sum of the positive numbers)
// take the function of (previousValue, currentValue)
// return total + currentValue

function positiveSum(arr) {
  return arr.filter(number => number > 0).reduce((total, currentValue) => {
    return total + currentValue;
  }, 0)
}

// Sample Tests

const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(positiveSum([1,2,3,4,5]),15);
    assert.strictEqual(positiveSum([1,-2,3,4,5]),13);
    assert.strictEqual(positiveSum([]),0);
    assert.strictEqual(positiveSum([-1,-2,-3,-4,-5]),0);
    assert.strictEqual(positiveSum([-1,2,3,4,-5]),9);
    });
  });