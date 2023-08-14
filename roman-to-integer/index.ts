const table: { [key: string]: number } = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
const romanToInt = (roman: string): number => {
  let result: number = 0;
  const allNumbers: number[] = [];
  for (let i = 0; i < roman.length; i++) {
    allNumbers.push(table[roman[i]]);
  }
  for (let i = 0; i < allNumbers.length; i++) {
    if (allNumbers[i] < allNumbers[i + 1]) {
      result = result + (allNumbers[i + 1] - allNumbers[i]);
      i++;
    } else {
      result = result + allNumbers[i];
    }
  }
  return result;
};

console.log(romanToInt("XC"));
