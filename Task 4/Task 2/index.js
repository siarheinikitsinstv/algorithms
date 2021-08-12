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

  let result = Number.NEGATIVE_INFINITY;

  const dfs = (i, j, sum) => {
    if (i === data.length) {
      result = Math.max(result, sum);
      return;
    }

    const curLevel = data[i];

    for (let k = 0; k < curLevel.length; k++) {
      dfs(i + 1, j, sum + data[i][j]);
      dfs(i + 1, j + 1, sum + data[i][j]);
    }
  };

  dfs(0, 0, 0);

  return result;
};

console.log(getMaxSum([]));

let data = [[1]];
console.log(getMaxSum(data));

data.push([10, 15], [2, 5, 27], [99, 3, 100, 6]);
console.log(getMaxSum(data));
