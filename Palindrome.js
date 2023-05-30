/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  var rev = 0;
  var num = x;
  while (num > 0){
      let temp = num % 10;
      rev = rev *10 + temp;
      num = Math.floor(num / 10);
  }

  if(rev === x){
      return true
  }else{
      return false
  }
};