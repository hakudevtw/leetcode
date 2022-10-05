// 13_Roman to Integer

const romanToInt = function (s) {
  const compare = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let romanNum = s;
  let sArr = s.split("");
  let sum = 0;

  // check special circumstance
  if (romanNum.includes("CM")) {
    sum += 900;
    sArr.splice(s.indexOf("CM"), 2);
    s = sArr.join("");
  }
  if (romanNum.includes("CD")) {
    sum += 400;
    sArr.splice(s.indexOf("CD"), 2);
    s = sArr.join("");
  }
  if (romanNum.includes("XC")) {
    sum += 90;
    sArr.splice(s.indexOf("XC"), 2);
    s = sArr.join("");
  }
  if (romanNum.includes("XL")) {
    sum += 40;
    sArr.splice(s.indexOf("XL"), 2);
    s = sArr.join("");
  }
  if (romanNum.includes("IX")) {
    sum += 9;
    sArr.splice(s.indexOf("IX"), 2);
    s = sArr.join("");
  }
  if (romanNum.includes("IV")) {
    sum += 4;
    sArr.splice(s.indexOf("IV"), 2);
    s = sArr.join("");
  }

  for (romanNum of sArr) {
    sum += compare[romanNum];
  }

  return sum;
};

romanToInt("MCMXCIV"); // 1994
