// 11_Container With Most Water

const getWaterArea = (num1, num2, index1, index2) => {
  const height = Math.min(num1, num2);
  const length = Math.abs(index1 - index2);

  return height * length;
};

const maxArea = function (height) {
  let result = 0;

  let first = 0;
  let last = height.length - 1;

  while (last > first) {
    const area = getWaterArea(height[first], height[last], first, last);
    result = Math.max(area, result);

    if (height[first] < height[last]) {
      first++;
    } else {
      last--;
    }
  }

  return result;
};

// maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]); // 49
console.log(maxArea([2, 3, 4, 5, 18, 17, 6])); // 17

// const getArea = (l1Edge, l2Edge) => {
//   // [x,y] (base = [x,0])
//   const width = Math.abs(l1Edge[0] - l2Edge[0]);
//   const height = l1Edge[1] > l2Edge[1] ? l2Edge[1] : l1Edge[1];
//   return width * height;
// };

// const maxArea = function (height) {
//   let max = 0;
//   const pointer = [0, 1]; // 至少有兩條

//   while (pointer[0] < height.length - 1 && pointer[1] < height.length) {
//     const area = getArea(
//       [pointer[0], height[pointer[0]]],
//       [pointer[1], height[pointer[1]]]
//     );
//     if (area > max) max = area;

//     if (pointer[1] + 1 === height.length) {
//       pointer[0] = pointer[0] + 1;
//       pointer[1] = pointer[0] + 1;
//     } else {
//       pointer[1]++;
//     }
//   }

//   return max;
// };

// const maxArea = function (height) {
//   let max = 0;

//   for (let i = 0; i < height.length; i++) {
//     for (let j = i + 1; j < height.length; j++) {
//       const minHeight = Math.min(height[i], height[j]);
//       const area = (j - i) * minHeight;
//       if (area > max) max = area;
//     }
//   }
//   return max;
// };
