// 9_Palindrome Number

const isPalindrome = function (x) {
  const reverseString = x.toString().split("").reverse().join("");
  return x.toString() === reverseString;
};

isPalindrome(121); // true
