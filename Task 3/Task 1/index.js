/*
    в центре леса стоит фотограф (точка 0,0) на вход приходят координаты деревьев и угол обзора камеры. 
    считаем что деревья не заслоняют друг друга. 
    определить сколько деревьев максимум может сфоткать фотограф за одну фотографию. (было на собеседовании в ауди)
*/

const calculateAngleByCoordinates = (x, y) => {
  const rad = Math.atan(x / y);

  let degrees = rad * (180 / Math.PI);

  if (x > 0 && y < 0) {
    degrees = 180 + degrees;
  } else if (x < 0 && y < 0) {
    degrees = 180 + degrees;
  } else if (x < 0 && y > 0) {
    degrees = 360 + degrees;
  }

  return degrees;
};

const getMaxTreesCount = (treeCoordinates, angle) => {
  // get interfal from [0, 360]
  const treeAngles = treeCoordinates.map((coordinates) =>
    calculateAngleByCoordinates(...coordinates)
  );

  treeAngles.sort((a, b) => a - b);

  // sliding window
  let start = 0;
  let maxTreesCount = 0;

  for (let end = 0; end < treeAngles.length; end++) {
    while (treeAngles[end] - treeAngles[start] > angle) {
      start += 1;
    }
    maxTreesCount = Math.max(maxTreesCount, end - start + 1);
  }

  return maxTreesCount;
};

console.log(
  getMaxTreesCount(
    [
      [3, 3],
      [3, -3],
      [-3, -3],
      [-3, 3],
      [1, 3],
    ],
    45
  )
);
