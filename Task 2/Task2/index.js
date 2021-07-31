/*
    на вход приходит валидная последовательность скобочек с данными внутри (только ()).
    при раскрытии скобочек данные внутри переворачиваются. раскрыть все скобочки и вывести результат.
    решить рекурсивно и итераативно
*/

// iterative approach
const reverseSubstrings = (str) => {
  if (!str) {
    return "";
  }

  const stack = [];
  let curStr = [];

  for (let i = 0; i < str.length; i++) {
    const curChar = str[i];

    if (curChar === "(") {
      stack.push(curStr);
      curStr = [];
    } else if (curChar === ")") {
      curStr = stack.pop().concat(curStr.reverse());
    } else {
      curStr.push(curChar);
    }
  }

  return curStr.join("");
};
/*
    time complexity: O(n)
    space complexity: O(n)
*/

// recursive approach
const reverseSubstrings1 = (str) => {
  const strArr = str.split("");
  let curIndex = 0;

  const recursiveParse = () => {
    let r = [];

    while (curIndex < strArr.length) {
      const curChar = strArr[curIndex++];

      if (curChar === "(") {
        r = r.concat(recursiveParse());
      } else if (curChar === ")") {
        return r.reverse();
      } else {
        r.push(curChar);
      }
    }

    return r;
  };

  return recursiveParse().join("");
};

/*
    time complexity: O(n)
    space complexity: O(n)
*/

console.log(reverseSubstrings("(abcd)")); // abcd
console.log(reverseSubstrings("(u(love)i)")); // iloveu
console.log(reverseSubstrings("(ed(et(oc))el)")); // leetcode
console.log(reverseSubstrings("a(bcdefghijkl(mno)p)q")); // apmnolkjihgfedcbq
