// 3_Longest Substring Without Repeating Characters.js

/**
 * @param {string} s
 * @return {number}
 */
// 使用 Sliding Window
const lengthOfLongestSubstring = function (s) {
  let window = ""; // current substring
  let count = 0; // longest length

  for (let i = 0; i < s.length; i++) {
    console.log(window);

    if (window.includes(s[i])) {
      // 如果原本就有了

      // 比對當前長度
      if (window.length > count) count = window.length;

      // 從重複值往後一格重新開始
      window = window.slice(window.indexOf(s[i]) + 1, window.length);

      window += s[i];
    } else {
      // 如果原本沒有
      window += s[i];
    }
  }

  // 最後一次的比對
  if (window.length > count) count = window.length;

  return count;
};

lengthOfLongestSubstring("abcabcbb"); // 3
// lengthOfLongestSubstring("bbbbb"); // 1
// lengthOfLongestSubstring("pww kew"); // 3

// 原本做法 (執行超時)
// const isRepeated = (arr, item) => {
//   if (arr.filter((c) => c === item).length > 1) return true;
//   return false;
// };

// const lengthOfLongestSubstring = function (s) {
//   if (!s) return 0;

//   let longestSubstring = s[0];
//   let result = 1;

//   let firstIndex = 0;
//   let lastIndex = 1;

//   while (lastIndex < s.length) {
//     const curSubArr = s.split("").slice(firstIndex, lastIndex + 1);

//     if (isRepeated(curSubArr, s[lastIndex])) {
//       // lastIndex 在 subString 中仍有重複
//       firstIndex++;
//     } else {
//       // lastIndex 在 subString 沒有重複
//       if (curSubArr.length > result) {
//         result = curSubArr.length;
//         longestSubstring = curSubArr.join("");
//       }
//       lastIndex++;
//     }
//   }

//   console.log(result);
// };
