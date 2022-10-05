// 1_Two Sum

function twoSum(nums, target) {
  let vals = {};

  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in vals) {
      return [vals[target-nums[i]], i];
    } else {
      vals[nums[i]] = i;
    }
  }
  return [];
};

// map 的寫法應該更好
// function twoSum(nums, target) {
//   let psum = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     if (psum.has(target - num)) {
//       return [psum.get(target - num), i];
//     }
//     psum.set(num, i);
//   }

//   return [];
// }

twoSum([2,7,11,15], 9); // [0,1]