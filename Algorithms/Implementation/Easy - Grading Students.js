/**
 * Title: Grading Students
 * URL: https://www.hackerrank.com/challenges/grading/
 * Difficulty: Easy
 * Max Score: 10
 */

function gradingStudents(grades) {
  const round = (v) => Math.ceil(v / 5) * 5;

  return grades.map((v) => ((round(v) - v) < 3 && v >= 38 ? round(v) : v));
}

gradingStudents([73, 67, 38, 33]);
// Expected Result: [75, 67, 40, 33]
