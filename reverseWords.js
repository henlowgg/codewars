// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// Solution

function reverseWords(str) {
    // Go for it
    str = str.split("");
    let start = 0;
    for (let end = 0;
            end < str.length; end++)
            {
                if (str[end] == ' ')
                {
                    reverseWords(str, start, end);
                    start = end +1
                }
            }
            reverseWords(str, 0, str.length - 1);
            reverseWords(str, 0, str.length - 1);
            return str.join("");
}


// Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
    assert.strictEqual(reverseWords('apple'), 'elppa');
    assert.strictEqual(reverseWords('a b c d'), 'a b c d');
    assert.strictEqual(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');
  });
});