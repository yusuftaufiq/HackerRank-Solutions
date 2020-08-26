/**
 * Title: Compare the Triplets
 * URL: https://www.hackerrank.com/challenges/compare-the-triplets
 * Difficulty: Easy
 * Max Score: 10
 */

function compareTriplets(arr1, arr2) {
  const compare = (a, b) => a.map((v, k) => (v > b[k] ? 1 : 0));
  const sum = (array) => array.reduce((a, v) => a + v);

  return [sum(compare(arr1, arr2)), sum(compare(arr2, arr1))];
}

compareTriplets([5, 6, 7], [3, 6, 10]);
// Expected Result: [1, 1]

compareTriplets([17, 28, 30], [99, 16, 8]);
// Expected Result: [2, 1]
