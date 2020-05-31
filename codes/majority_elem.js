/*
Given an array of size n, find the majority element.
The majority element is the element that appears more than ⌊ n / 2 ⌋ times.

You may assume that the array is non - empty and the majority element always exist in the array.


Input: [3,2,3]
Output: 3

Input: [2,2,1,1,1,2,2]
Output: 2
*/

var majorityElement = function (nums) {
  let obj = {};
  let counter = 1;
  let max = 0;
  nums.forEach((num) => {
    if (!obj.hasOwnProperty(num)) {
      obj[num] = counter;
    } else {
      counter = obj[num] + 1;
      obj[num] = counter;
    }
    counter = 1;
  });
  max = parseInt(Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b)));
  return max;
};
