/* 
    дано не отрицательное число, определить можно ли его получить сложив квадраты двух чисел
    (было на собеседовании в ракутен)
*/

const isAllow = (number) => {
  const squares = new Set();

  for (let i = 1; i <= Math.floor(Math.sqrt(number)); i++) {
    squares.add(Math.pow(i, 2));
  }

  const squaresNumbers = [...squares.values()];
  for (let i = 0; i < squaresNumbers.length; i++) {
    const target = number - squaresNumbers[i];

    if (squares.has(target)) {
      return true;
    }
  }

  return false;
};

console.log(isAllow(13)); // true - 4 + 9
console.log(isAllow(41)); // true - 25 + 16
console.log(isAllow(42)); // false
console.log(isAllow(20)); // true - 16 + 4
console.log(isAllow(37)); // true - 1 + 36
console.log(isAllow(34)); // true - 9 + 25
