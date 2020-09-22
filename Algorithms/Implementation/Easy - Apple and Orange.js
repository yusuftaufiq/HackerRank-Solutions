/**
 * Title: Apple and Orange
 * URL: https://www.hackerrank.com/challenges/apple-and-orange/
 * Difficulty: Easy
 * Max Score: 10
 */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const fruitsInSamHouse = (fruits, tree) => (
    fruits.filter((v) => v + tree >= s && v + tree <= t)
  );

  return [fruitsInSamHouse(apples, a).length, fruitsInSamHouse(oranges, b).length];
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
// Expected Result: [1, 1]
