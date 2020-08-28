/**
 * Title: Diagonal Difference
 * URL: https://www.hackerrank.com/challenges/diagonal-difference/
 * Difficulty: Easy
 * Max Score: 10
 */

function diagonalDifference(arr) {
  const sumDiagonally = (array) => array.reduce((a, v, k) => a + v[k], 0);

  const reverse = arr.map((v) => [...v].reverse());

  return Math.abs(sumDiagonally(arr) - sumDiagonally(reverse));
}

diagonalDifference([
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
]);
// Expected Result: 15
