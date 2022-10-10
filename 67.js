// 67_Add Binary
// 我的解法
const addBinary = function (a, b) {
  let result = "";

  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;

  while ((i >= 0) | (j >= 0)) {
    // let curSum;
    // if (i >= 0 && j >= 0) {
    //   curSum = +a[i] + +b[j] + carry;
    // } else {
    //   if (i < 0) curSum = +b[j] + carry;
    //   if (j < 0) curSum = +a[i] + carry;
    // }

    const m = i < 0 ? 0 : Number(a[i]);
    const n = j < 0 ? 0 : Number(b[j]);
    const curSum = m + n + carry;

    if (curSum > 1) {
      carry = 1;
      if (curSum === 2) result = 0 + result;
      if (curSum === 3) result = 1 + result;

      i--;
      j--;
    } else {
      carry = 0;
      result = curSum + result;

      i--;
      j--;
    }
  }

  if (carry === 1) result = 1 + result;

  return result;
};

// 其他人解法
// const addBinary = function (a, b) {
//   var i = a.length - 1;
//   var j = b.length - 1;
//   var carry = 0;
//   var result = "";
//   while (i >= 0 || j >= 0) {
//     var m = i < 0 ? 0 : a[i] | 0;
//     var n = j < 0 ? 0 : b[j] | 0;
//     carry += m + n; // curSum of two digits
//     result = (carry % 2) + result; // string concat
//     carry = (carry / 2) | 0; // remove decimals,  1 / 2 = 0.5, only get 0
//     i--;
//     j--;
//   }
//   if (carry !== 0) result = carry + result;

//   return result;
// };

// 新世代寫法
// const addBinary = (a, b) => {
//   console.log(BigInt(`0b${a}`));
//   console.log(BigInt(`0b${b}`));
//   return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
// };

console.log(addBinary("1111", "1111"));
