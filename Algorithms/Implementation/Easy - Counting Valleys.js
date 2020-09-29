/**
 * Title: Counting Valleys
 * URL: https://www.hackerrank.com/challenges/counting-valleys
 * Difficulty: Easy
 * Max Score: 15
 */

function countingValleys(s) {
  const arr = [...s];

  const result = arr.reduce((a, v) => {
    const current = v === 'U' ? 1 : -1;
    const isSea = a.last < 0 && a.last + current === 0 ? 1 : 0;
    return { last: a.last + current, count: a.count + isSea };
  }, { last: 0, count: 0 });

  return result.count;
}

countingValleys('UDDDUDUU');
// Expected Result: 1

countingValleys('DDUUDDUDUUUD');
// Expected Result: 2
