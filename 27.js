// 27_Merge Two Sorted Lists

const removeElement = function (nums, val) {
  let count = 0;

  while (nums.includes(val)) {
    nums.splice(nums.indexOf(val), 1);
    nums.push("_");
    count++;
  }

  console.log(nums, nums.length - count);
  return nums.length - count;
};

removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
