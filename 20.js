// 20_Valid Parentheses

const isValid = function (s) {
  // 作比對用的陣列
  const checkArr = [];
  const map = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let item of s) {
    if (item === "{" || item === "(" || item === "[") {
      // item = '(', '[', '{'
      checkArr.push(item);
    } else {
      // item = ')', ']', '}'
      if (checkArr.pop() !== map[item]) {
        return false;
      }
    }
  }
  // 如果 checkArr 被 pop 空代表正確
  return checkArr.length === 0;
};

isValid('()[]{}') // true
isValid('(}') // false