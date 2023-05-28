/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  var rev;
  for (let i = 0; i < x.toString().length; i++) {
    rev += x % 10;
    rev *= 10;
    x /= 10;
  }
  if (rev === x) {
    return true;
  } else {
    return false;
  }
};
