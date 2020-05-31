/*
Given an arbitrary ransom note string and another string containing letters from all the magazines, 
write a function that will return true if the ransom note can be constructed from the magazines ;
otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.


Input: ransomNote = "a", magazine = "b"
Output: false

Input: ransomNote = "aa", magazine = "ab"
Output: false
*/

var canConstruct = function (ransomNote, magazine) {
  let originalransomNote = ransomNote;
  let arr = Array.from(magazine);
  let count = 0;
  arr.map((el) => {
    if (ransomNote.includes(el)) {
      let index = ransomNote.indexOf(el);
      ransomNote =
        ransomNote.substring(0, index) +
        ransomNote.substring(index + 1, ransomNote.length);
      count++;
    }
  });
  if (count === originalransomNote.length) {
    return true;
  } else {
    return false;
  }
};
