/**
 * Title: Compare the Triplets
 * URL: https://www.hackerrank.com/challenges/compare-the-triplets
 * Difficulty: Easy
 * Max Score: 10
 */

function compareTriplets(arr1, arr2) {
  const sum = (x, y) => x.reduce((a, v, k) => a + (v > y[k] ? 1 : 0), 0);

  return [sum(arr1, arr2), sum(arr2, arr1)];
}

compareTriplets([5, 6, 7], [3, 6, 10]);
// Expected Result: [1, 1]

compareTriplets([17, 28, 30], [99, 16, 8]);
// Expected Result: [2, 1]
