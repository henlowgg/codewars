// Detect Pangram 6 KYU

// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// Solution

// Solution Notes

// First thoughts: since instructions are saying to return true or false, we are obviously looking at a boolean
// make sure to ignore numbers and punctuation

// 1. Convert string to lower case and split to ''
// const splStr = string.toLowerCase().split('');
// 2. Split 'abcdefghijklmnopqrstuvwxyz' that will create an array of each letter
// const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
// 3. Loop over each letter in 'string' (splitted)
// for (const letter of splStr)
// 4. Loop over each letter in 'alphabet' (splitted)
// for (let i = 0; i < alphabet.length; i++)
// 5. If 'letter' is 'alphabet at popsition 'i', setting alphabet at 'i' to Empty String
// if (letter === alphabet[i]) alphabet[i] = '';
// 6. Filtering alphabet with the values that aren't equal to ''
// alphabet = alphabet.filter(value => value !== '');
// 7. Return true if alphabet.length is 0, false otherwise
// return !alphabet.length ? true : false;

function isPangram(string){
    //...
}

// Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("test1", () => {
    var string = "The quick brown fox jumps over the lazy dog."
    assert.strictEqual(isPangram(string), true)
  })
  it("test2", () => {
    var string = "This is not a pangram."
    assert.strictEqual(isPangram(string), false)
  });
});