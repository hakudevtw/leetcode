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
  const specialCompare = {
    IV:4,
    IX:9,
    XL:40,
    XC:90,
    CD:400,
    CM:900,
  }
  let romanNum = s;
  let sArr = s.split("");
  let sum = 0;

  // check special circumstance
  Object.keys(specialCompare).forEach(key=>{
    if (romanNum.includes(key)) {
      sum += specialCompare[key];
      sArr.splice(s.indexOf(key), 2);
      s = sArr.join("");
    }
  })

  for (romanNum of sArr) {
    sum += compare[romanNum];
  }

  console.log(sum);
  return sum;
};


romanToInt("MCMXCIV"); // 1994
