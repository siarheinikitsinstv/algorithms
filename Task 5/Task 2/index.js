/*
Найти самую длинную подстроку, не содержащую повторяющихся символов
Input: s = "abcabcbb"
Output: 3
самая длинная - abc

Input: s = "bbbbb"
Output: 1
самая длинная - b
*/

const getMaxSubstringLength = (str) => {
  let start = 0;
  let hash = {};
  let result = 0;

  for (let end = 0; end < str.length; end++) {
    const curLetter = str[end];

    if (curLetter in hash) {
      start = Math.max(start, hash[curLetter] + 1);
    }

    hash[curLetter] = end;

    result = Math.max(result, end - start + 1);
  }

  return result;
};

console.log(getMaxSubstringLength("abcabcbb")); // 3 - abc
console.log(getMaxSubstringLength("bbbbb")); // 1 - b
console.log(getMaxSubstringLength("abbbb")); // 2 - ab
