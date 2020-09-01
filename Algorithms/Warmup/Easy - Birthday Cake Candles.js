/**
 * Title: Birthday Cake Candles
 * URL: https://www.hackerrank.com/challenges/birthday-cake-candles
 * Difficulty: Easy
 * Max Score: 10
 */

function birthdayCakeCandles(arr) {
  const max = Math.max(...arr);

  return arr.filter((v) => v === max).length;
}

birthdayCakeCandles([3, 2, 1, 3]);
// Expected Result: 2
