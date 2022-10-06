// 58_Length of Last Word
const lengthOfLastWord = function (s) {
  const wordsArr = s.trim().split(" ");
  return wordsArr[wordsArr.length - 1].length;
};

lengthOfLastWord("luffy is still joyboy");
lengthOfLastWord("   fly me   to   the moon  ")