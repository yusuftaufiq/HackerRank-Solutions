/**
 * Title: Simple Array Sum
 * URL: https://www.hackerrank.com/challenges/simple-array-sum
 * Difficulty: Easy
 * Max Score: 10
 */

function simpleArraySum(arr) {
  return arr.reduce((a, b) => a + b);
}

simpleArraySum([2, 5, 3]);
// Expected Result: 10

simpleArraySum([152, 295, 51]);
// Expected Result: 498
