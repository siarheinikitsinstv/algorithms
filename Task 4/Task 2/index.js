/*
    дана пирамида в нодах которой стоят рандомные числа. спускаясь вниз по пирамиде можно только в смежные ноды - 
    т.е из корня можно спустится на любую ноду со второго уровня, но с ноды второго уровня (10) только в 2 смежные (2 и 5), в третью нельзя (в 27). 
    в процессе спуска мы получаем из чисел посещенных нод их сумму.
    
    Найти максимально возможную сумму.
*/

const getMaxSum = (data) => {
  if (!data || !data.length) {
    return 0;
  }

  let prevSums = data[0];

  for(let i = 1; i < data.length; i++) {
    const curLevel = data[i];
    const newSums = Array(curLevel.length).fill(Number.NEGATIVE_INFINITY);

    for(let j = 0; j < prevSums.length; j++) {
      newSums[j] = Math.max(newSums[j], prevSums[j] + curLevel[j]);
      newSums[j + 1] = Math.max(newSums[j + 1], prevSums[j] + curLevel[j + 1]);
    }

    prevSums = newSums;
  }

  return Math.max(...prevSums);
};

console.log(getMaxSum([]));

let data = [[1]];
console.log(getMaxSum(data));

data.push([10, 15], [2, 5, 27], [99, 3, 100, 6]);
console.log(getMaxSum(data));
