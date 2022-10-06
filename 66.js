// 66_Plus One

const plusOne = function (digits) {
  const result = [...digits];

  result[result.length - 1]++;

  while (result.includes(10)) {
    const tenIndex = result.indexOf(10);

    if (tenIndex > 0) {
      result[tenIndex] = 0;
      result[tenIndex - 1]++;
    } else {
      // tenIndex === 0
      result.splice(0, 1, 1, 0);
    }
  }

  return result;
};

plusOne([9, 9, 9, 9]);
