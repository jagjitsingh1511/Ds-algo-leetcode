/*
Given a string, find the first non-repeating character in it and return it's index.
 If it doesn't exist, return -1.

s = "leetcode"
return 0
*/

var firstUniqChar = function (s) {
  let arr = Array.from(s);
  return compute(arr);
};

function compute(arr) {
  let counter = 0;
  let value = -1;
  arr.forEach((elem, index) => {
    if (counter < 1) {
      if (arr.indexOf(elem) === arr.lastIndexOf(elem)) {
        counter++;
        value = index;
      }
    }
  });
  return value;
}
