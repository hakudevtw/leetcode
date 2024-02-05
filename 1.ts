function twoSum(nums: number[], target: number): number[] {
  const numMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (numMap.has(target - nums[i])) {
      return [numMap.get(target - nums[i]), i];
    } else {
      numMap.set(nums[i], i);
    }
  }
  return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
