/**
 * Title: Plus Minus
 * URL: https://www.hackerrank.com/challenges/plus-minus/
 * Difficulty: Easy
 * Max Score: 10
 */

function plusMinus(arr) {
  const ratio = (number) => (number / arr.length).toFixed(6);

  const count = arr.reduce((a, v) => ({
    positive: a.positive + (v > 0 ? 1 : 0),
    negative: a.negative + (v < 0 ? 1 : 0),
    zero: a.zero + (v === 0 ? 1 : 0),
  }), { positive: 0, negative: 0, zero: 0 });

  return [ratio(count.positive), ratio(count.negative), ratio(count.zero)];
}

plusMinus([-4, 3, -9, 0, 4, 1]);
// Expected Result: ['0.500000', '0.333333', '0.166667']

plusMinus([1, 2, 3, -1, -2, -3, 0, 0]);
// Expected Result: ['0.375000', '0.375000', '0.250000']
