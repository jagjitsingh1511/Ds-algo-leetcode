/*

Given a positive integer num, output its complement number.
The complement strategy is to flip the bits of its binary representation.


*/

/*
Input: J = "aA", S = "aAAbbbb"
Output: 3

Input: J = "z", S = "ZZ"
Output: 0
*/

var findComplement = function (num) {
  let binaryNum = getBinaryOfNumber(num);
  let negate = '';
  let negatedValue = 0;
  if (binaryNum != 0) {
    for (let str in binaryNum) {
      negate += binaryNum[str] ^= 1;
    }
    negatedValue = negate !== '0' ? getNumberFromBinary(negate) : 0;
  }
  return negatedValue;
};
function getBinaryOfNumber(n) {
  return (n >>> 0).toString(2);
}
function getNumberFromBinary(n) {
  let sum = parseInt(n, 2);
  return sum;
}
