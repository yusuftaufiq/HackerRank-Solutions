/**
 * Title: Number Line Jumps
 * URL: https://www.hackerrank.com/challenges/kangaroo
 * Difficulty: Easy
 * Max Score: 10
 */

function kangaroo(x1, v1, x2, v2) {
  let locationKangaroo1 = x1;
  let locationKangaroo2 = x2;

  while (
    !(((locationKangaroo1 > locationKangaroo2) && (v1 >= v2))
    || ((locationKangaroo1 < locationKangaroo2) && (v1 <= v2)))
  ) {
    if (locationKangaroo1 === locationKangaroo2) {
      return 'YES';
    }
    locationKangaroo1 += v1;
    locationKangaroo2 += v2;
  }

  return 'NO';
}

kangaroo(0, 3, 4, 2);
// Expected Result: YES

kangaroo(0, 2, 5, 3);
// Expected Result: NO
