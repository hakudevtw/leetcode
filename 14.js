// 14_Longest Common Prefix

const longestCommonPrefix = function (strs) {
  // checking
  if (strs.length === 0) return "";
  if (strs.length === 1) return strs[0];

  const firstStr = strs[0];

	// compare
  let commonPrefix = "";
  for (let i = 0; i < firstStr.length; i++) {
    let fit = true;
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== firstStr[i]) {
        fit = false;
      }
    }
		// 比對錯誤就不繼續往下比對
    if (!fit) break;
    commonPrefix += firstStr[i];
  }

  return commonPrefix;
};

// ["flower", "flow", "flight"] -> fl
// ["aaa", "aa", "aaa"] -> aa
// ["car", "core"] -> c
// ["a"] -> a