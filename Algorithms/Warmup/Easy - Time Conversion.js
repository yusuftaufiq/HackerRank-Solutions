/**
 * Title: Time Conversion
 * URL: https://www.hackerrank.com/challenges/time-conversion
 * Difficulty: Easy
 * Max Score: 15
 */

function timeConversion(arr) {
  const [h, m, s, f] = [...arr.replace(/PM|AM/, '').split(':'), arr.match(/PM|AM/)[0]];

  const newHour = (() => {
    const numberHour = Number(h);
    let result;
    if (f === 'AM') {
      result = numberHour === 12 ? 0 : numberHour;
    } else {
      result = numberHour === 12 ? 12 : numberHour + 12;
    }
    return (`${result}`).padStart(2, '0');
  })();

  return `${newHour}:${m}:${s}`;
}

timeConversion('07:05:45PM');
// Expected Result: 19:05:45

timeConversion('12:40:22AM');
// Expected Result: 00:40:22
