/**
 * Title: Between Two Sets
 * URL: https://www.hackerrank.com/challenges/between-two-sets
 * Difficulty: Easy
 * Max Score: 10
 */

function getTotalX(a, b) {
  const count = Array(100).fill().filter((v, k) => (
    a.every((sv) => (k + 1) % sv === 0)
    && b.every((sv) => sv % (k + 1) === 0)
  ));

  return count.length;
}

getTotalX([2, 4], [16, 32, 96]);
// Expected Result: 3
