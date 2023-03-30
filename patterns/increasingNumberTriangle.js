const input = 5;
let string = "";

const printPattern = () => {
  let start = 1;
  for (let i = 1; i <= input; i++) {
    for (let j = 1; j <= i; j++) {
      string += start + " ";
      start++;
    }
    string += "\n";
  }

  return string;
};

console.log(printPattern());
