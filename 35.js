// 35_Search Insert Position
const searchInsert = function (nums, target) {
  if (nums.includes(target)) return nums.indexOf(target);
  if (target > nums[nums.length - 1]) return nums.length;
  if (target < nums[0]) return 0;

  const curRange = [0, nums.length - 1];

  // 一定會在某兩個數字中間
  while (curRange[1] - curRange[0] > 1) {
    const midIndex = Math.floor((curRange[0] + curRange[1]) / 2);
    if (target > nums[midIndex]) {
      curRange[0] = midIndex;
    } else {
      curRange[1] = midIndex;
    }
  }

  return curRange[1];
};

// const searchInsert = function (nums, target) {
//   if (nums.includes(target)) return nums.indexOf(target);
//   if (target > nums[nums.length - 1]) return nums.length;
//   if (target < nums[0]) return 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (target > nums[i] && target < nums[i + 1]) return i + 1;
//   }
// };

// console.log(searchInsert([1, 3, 5, 6], 2));
searchInsert([1, 3, 5, 6], 2); // 1
