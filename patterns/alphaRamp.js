const input = 5;
let string = "";

const printPattern = () => {
  for (let i = 1; i <= input; i++) {
    for (let j = 1; j <= i; j++) {
      string += String.fromCharCode(i + 64) + ' ';
    }
    string += "\n";
  }

  return string;
};

console.log(printPattern());
