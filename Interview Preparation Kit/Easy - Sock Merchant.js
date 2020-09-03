/**
 * Title: Sock Merchant
 * URL: https://www.hackerrank.com/challenges/sock-merchant
 * Difficulty: Easy
 * Max Score: 10
 */

function sockMerchant(ar) {
  const unique = [...new Set(ar)];

  const count = unique.reduce((a, v) => (
    a + Math.floor(ar.filter((sv) => sv === v).length / 2)
  ), 0);

  return count;
}

sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20]);
// Expected Result: 3

sockMerchant([1, 1, 3, 1, 2, 1, 3, 3, 3, 3]);
// Expected Result: 4
