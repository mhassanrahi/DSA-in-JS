const input = 5;
let string = "";

const printPattern = () => {
  for (let i = 0; i < input; i++) {
    // spaces
    for (let j = 1; j <= input - i - 1; j++) {
      string += " ";
    }

    // characters
    let breakpoint = (2 * i + 1) / 2;
    let character = 65;
    for (let j = 1; j <= 2 * i + 1; j++) {
      string += String.fromCharCode(character);
      if (j <= breakpoint) {
        character++;
      } else {
        character--;
      }
    }

    // spaces
    for (let j = 1; j <= input - i - 1; j++) {
      string += " ";
    }
    string += "\n";
  }

  return string;
};

console.log(printPattern());
