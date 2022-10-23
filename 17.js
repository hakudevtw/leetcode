// 17_Letter Combinations of a Phone Number

const alphabets = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

const letterCombinations = function (digits) {
  if (!digits) return [];

  const result = [];
  const resultLength = [...digits].reduce(
    (acc, cur) => alphabets[cur].length * acc,
    1
  );
  const pointers = new Array(digits.length).fill(0);
  while (result.length < resultLength) {
    let str = "";
    for (let i = 0; i < digits.length; i++) {
      str += alphabets[digits[i]][pointers[i]];
    }
    result.push(str);

    // 0 <= digits.length <= 4
    let curPointer = pointers.length - 1;
    while (curPointer >= 0) {
      if (pointers[curPointer] < alphabets[digits[curPointer]].length - 1) {
        pointers[curPointer] = pointers[curPointer] + 1;
        break;
      } else {
        pointers[curPointer] = 0;
        curPointer -= 1;
      }
    }
  }

  return result;
};

letterCombinations("23");

// 其他人的寫法
// const letterCombinations = function(digits) {
//   if(!digits.length) return [];
  
//   let map = {
//       2: ['a', 'b', 'c'],
//       3: ['d', 'e', 'f'],
//       4: ['g', 'h', 'i'],
//       5: ['j', 'k', 'l'],
//       6: ['m', 'n', 'o'],
//       7: ['p', 'q', 'r', 's'],
//       8: ['t', 'u', 'v'],
//       9: ['w', 'x', 'y', 'z'],
//   }
  
//   let result = [];
  
//   function permute(string, index) {
//       if(index === digits.length) {
//           result.push(string);
//           return;
//       }
      
//       for(let x of map[digits[index]]) {
//           permute(string+x, index+1);
//       }
//   }
//   permute('', 0);
//   return result;
// };