/*
Вы посещаете ферму, на которой растут один ряд фруктовых деревьев, расположенных слева направо. Деревья представлены целочисленным массивом плодов, где фрукты [i] - это тип фруктов, которые производит i-е дерево.
Вы хотите собрать как можно больше фруктов. Однако у хозяина           есть несколько строгих правил, которые необходимо соблюдать:
У вас есть только две корзины, и каждая корзина может содержать только один вид фруктов. Количество фруктов в каждой корзине не ограничено.
Начиная с любого дерева по вашему выбору, вы должны сорвать ровно один плод с каждого дерева (включая стартовое дерево), двигаясь вправо. Собранные фрукты должны поместиться в одну из ваших корзин.
Как только вы дойдете до дерева с плодами, которые не помещаются в ваши корзины, вы должны остановиться.
        Учитывая целочисленный массив фруктов, верните максимальное количество фруктов, которое вы можете собрать.
Input: fruits = [1,2,1]
Output: 3
мы можем собрать все 3 фрукта

Input: fruits = [0,1,2,2]
Output: 3
соберем фрукты 1 и 2 типа начиная со второго

Input: fruits = [1,2,3,2,2]
Output: 4
собираем 2 и 3 начиная со второго фрукта
*/

const getMaxFruits = (arr) => {
  if (!arr || !arr.length) {
    return 0;
  }

  let result = 0;
  let hash = {};
  let start = 0;

  for (let end = 0; end < arr.length; end++) {
    const curFruit = arr[end];

    if (!(curFruit in hash)) {
      hash[curFruit] = 0;
    }
    hash[curFruit] += 1;

    while (Object.keys(hash).length > 2) {
      const deleteFruit = arr[start++];

      hash[deleteFruit] -= 1;

      if (!hash[deleteFruit]) {
        delete hash[deleteFruit];
      }
    }

    result = Math.max(result, end - start + 1);
  }

  return result;
};

console.log(getMaxFruits([1, 2, 1])); // 3
console.log(getMaxFruits([0, 1, 2, 2])); // 3
console.log(getMaxFruits([1, 2, 3, 2, 2])); // 4
