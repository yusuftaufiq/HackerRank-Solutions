/**
 * Title: Mini-Max Sum
 * URL: https://www.hackerrank.com/challenges/mini-max-sum
 * Difficulty: Easy
 * Max Score: 10
 */

function miniMaxSum(arr) {
  const sum = (except) => arr.reduce((a, v, k) => a + (k === except ? 0 : v), 0);

  return `${sum(arr.indexOf(Math.max(...arr)))} ${sum(arr.indexOf(Math.min(...arr)))}`;
}

miniMaxSum([1, 2, 3, 4, 5]);
// Expected Result: '10 14'

miniMaxSum([7, 69, 2, 221, 8974]);
// Expected Result: '299 9271'
