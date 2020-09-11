/**
 * Title: Jumping on the Clouds
 * URL: https://www.hackerrank.com/challenges/2d-array
 * Difficulty: Easy
 * Max Score: 15
 */

function hourglassSum(arr) {
  const template = Array(arr.length - 2).fill(Array(arr.length - 2).fill());
  const hourglass = template.map((v, k) => (
    v.map((sv, sk) => ([
      arr[k][sk], arr[k][sk + 1], arr[k][sk + 2],
      arr[k + 1][sk + 1],
      arr[k + 2][sk], arr[k + 2][sk + 1], arr[k + 2][sk + 2],
    ]))
  ));
  const sum = hourglass.map((v) => v.map((sv) => sv.reduce((a, b) => a + b)));

  return Math.max(...[].concat(...sum));
}

hourglassSum([
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
]);
// Expected Result: 19

hourglassSum([
  [-9, -9, -9, 1, 1, 1],
  [0, -9, 0, 4, 3, 2],
  [-9, -9, -9, 1, 2, 3],
  [0, 0, 8, 6, 6, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, 1, 2, 4, 0],
]);
// Expected Result: 28
