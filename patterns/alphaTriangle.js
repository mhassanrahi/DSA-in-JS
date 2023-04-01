const input = 5;
let string = "";

const printPattern = () => {
  for (let i = 0; i < input; i++) {
    for (let j = 0; j <= i; j++) {
    string += String.fromCharCode((input - 1 - j) + 65);
    }
    string += "\n";
  }

  return string;
};

console.log(printPattern());
