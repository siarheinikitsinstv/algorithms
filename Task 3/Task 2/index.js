/*
    есть массив случайных положительных чисел. нужно вычеркнуть 2 числа так, чтобы массив разбился на 3 участка и сумма участков была одинаковой.
    порядок пришедших чисел не меняется.
    вывести сумму вычеркнутых или -1 если такое выполнить невозможно. (было на собеседовании в амазон)
*/

const getSumSeparatedIndices = (arr) => {
  if (!arr || arr.length < 5) {
    return -1;
  }

  const arrSum = arr.reduce((acc, val) => acc + val, 0);

  let part1 = arr[0];
  let part2;
  let part3;

  // sliding window
  let start = 1;
  let windowSum = 0;

  for (let end = start; end < arr.length; end++) {
    windowSum += arr[end];

    if (end - start < 2) {
      continue;
    }

    part2 = windowSum - (arr[start] + arr[end]);

    if (part1 < part2) {
      part1 += arr[start];
      windowSum -= arr[start];
      start += 1;
      part2 -= arr[start];
    }

    if (part1 === part2 && part1 === (arrSum - part1 - windowSum)) {
      return arr[start] + arr[end];
    }
  }

  return -1;
};

console.log(getSumSeparatedIndices([1, 3, 4, 10, 7, 1, 9, 8])); // 19
console.log(getSumSeparatedIndices([1, 3, 4, 10, 7, 1, 9, 9])); // -1
console.log(getSumSeparatedIndices([9, 5, 4, 14, 8, 14])); // 12
console.log(getSumSeparatedIndices([14, 4, 14, 8, 14])); // 12
console.log(getSumSeparatedIndices([1, 3, 4, 6, 5, 14, 1, 14])); // 6
console.log(getSumSeparatedIndices([1, 3, 1, 10, 7, 1, 9, 8])); // -1

/*
    time complexity: O(n)
    space complexity: O(1)
*/