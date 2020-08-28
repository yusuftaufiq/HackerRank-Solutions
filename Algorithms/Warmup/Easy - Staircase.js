/**
 * Title: Staircase
 * URL: https://www.hackerrank.com/challenges/staircase
 * Difficulty: Easy
 * Max Score: 10
 */

function staircase(n) {
  const template = Array(n).fill(Array(n).fill(' '));

  const fill = template.map((v, k) => v.map((sv, sk) => (n - 1 - sk <= k ? '#' : sv)).join``);

  return fill.join`\n`;
}

staircase(6);
// Expected Result:
//      #
//     ##
//    ###
//   ####
//  #####
// ######
