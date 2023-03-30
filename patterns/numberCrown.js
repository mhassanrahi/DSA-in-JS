const input = 5;
let string = "";

const printPattern = () => {
  let space = 2 * (input - 1);
  for (let i = 1; i <= input; i++) {
    // numbers
    for (let j = 1; j <= i; j++) {
        string += j
    }
    // spaces
    for (let j = 1; j <= space; j++) {
      string += " ";
    };
    // numbers
    for (let j = i; j >= 1; j--) {
        string += j
    }
    string += "\n";
    space -= 2;
  }

  return string;
};

console.log(printPattern());
