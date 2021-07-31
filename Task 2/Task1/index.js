/* Task: дана последовательность из скобочек. вывести валидна ли она или нет.. скобочки могут быть ()[]{}.
предложить минимум 2 варианта решения. как минимум один из них должен быть оптимизирован под большие значения.
*/

const closedBracketsByOpen = new Map([
  [")", "("],
  ["]", "["],
  ["}", "{"],
]);

const isValidSequence = (str) => {
  if (!str) {
    return true;
  }

  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const curChar = str[i];

    if (closedBracketsByOpen.has(curChar)) {
      const expectedBracket = closedBracketsByOpen.get(curChar);

      if (expectedBracket !== stack.pop()) {
        return false;
      }
    } else {
      stack.push(curChar);
    }
  }

  return !stack.length;
};
/*
    time complexity: O(n)
    space compexity: O(n)
*/

console.log(isValidSequence("()[")); // false
console.log(isValidSequence("()]")); // false
console.log(isValidSequence("()[]")); // true
console.log(isValidSequence("([]{()})")); // true
console.log(isValidSequence("([])")); // true
console.log(isValidSequence("({[]})")); // true
console.log(isValidSequence("({[})")); // false
