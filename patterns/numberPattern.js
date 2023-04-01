const input = 4;
let string = "";

const printPattern = () => {
  for (let i = 1; i <= (2 * input) - 1; i++) {
    for (let j = 1; j <= (2 * input) - 1; j++) {
        const top = i;
        const left = j;
        const right = ((2 * input) - 1) - j;
        const bottom = ((2 * input) - 1) - i;

        const value = input - Math.min(top, left, right, bottom);
        string += value;
    }
    string += "\n";
  }

  return string;
};

console.log(printPattern());
