/**
 * Title: Repeated String
 * URL: https://www.hackerrank.com/challenges/repeated-string
 * Difficulty: Easy
 * Max Score: 20
 */

function repeatedString(s, n) {
  const length = Math.floor(n / s.length);
  const count = [...s].filter((v) => v === 'a').length * length;
  const lastCount = [...s.substr(0, n % s.length)].filter((v) => v === 'a').length;

  return count + lastCount;
}

repeatedString('aba', 10);
// Expected Result: 7

repeatedString('a', 1000000000000);
// Expected Result: 1000000000000
