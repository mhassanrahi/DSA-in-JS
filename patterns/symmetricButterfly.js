const input = 5;
let string = "";

const printPattern = () => {
  for (let i = 0; i < input; i++) {
    for (let j = 0; j <= i; j++) {
      string += "*";
    }

    for (let j = 0; j < (input - (i + 1)) * 2; j++) {
      string += " ";
    }

    for (let j = 0; j <= i; j++) {
      string += "*";
    }
    string += "\n";
  }

  for (let i = 1; i < input; i++) {
    for (let j = 1; j <= input - i; j++) {
      string += "*";
    }

    for (let j = 1; j <= i * 2; j++) {
      string += " ";
    }

    for (let j = 1; j <= input - i; j++) {
      string += "*";
    }
    string += "\n";
  }

  return string;
};

console.log(printPattern());
