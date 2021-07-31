/*
    вывести все валидные последовательности круглых скобочек заданной длины.
*/

const generateSequences = (n) => {
  const result = [];

  const generate = (openedBracketCount, closedBracketCount, sequence) => {
    if (
      openedBracketCount < 0 ||
      closedBracketCount < 0 ||
      closedBracketCount < openedBracketCount
    ) {
      return;
    }
    if (!openedBracketCount && !closedBracketCount) {
      result.push(sequence);
      return;
    }

    generate(openedBracketCount - 1, closedBracketCount, sequence + "(");
    generate(openedBracketCount, closedBracketCount - 1, sequence + ")");
  };

  generate(n, n, "");

  return result;
};

console.log(generateSequences(1));
console.log(generateSequences(2));
console.log(generateSequences(3));
console.log(generateSequences(4));
