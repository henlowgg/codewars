// Remove Duplicates from a List 8 KYU

// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

// Examples:

// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]

// Solution

// Solution notes

function distinct(a) {
    return [];
  }

// Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Sample Tests", () => {
  it("test", () => {
    assert.deepEqual(distinct([1]), [1]);
    assert.deepEqual(distinct([1,2]), [1,2]);
    assert.deepEqual(distinct([1,1,2]), [1,2]);
  });
});