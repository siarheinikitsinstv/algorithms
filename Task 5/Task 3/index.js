/*
    Дан массив целых чисел nums и целое число k. 
    вернуть длину самого короткого не пустого подмассива с суммой не менее k. 
    если такгого подмассива нет то вернуть -1.
*/

const getShortestSubArrayLength = (nums, k) => {
  if (!nums || !nums.length) {
    return 0;
  }

  let result = Number.POSITIVE_INFINITY;
  let start = 0;
  let sum = 0;

  for (let end = 0; end < nums.length; end++) {
    sum += nums[end];

    while (sum >= k) {
      result = Math.min(result, end - start + 1);
      sum -= nums[start++];
    }
  }

  return result === Number.POSITIVE_INFINITY ? -1 : result;
};

console.log(getShortestSubArrayLength([1, 1, 3, 4, 1], 5)); // 2
console.log(getShortestSubArrayLength([3, 4, 1, 1, 6], 8)); // 3
console.log(getShortestSubArrayLength([2, 1, 5, 2, 8], 7)); // 1
