const input = 5;
let string = "";

const printPattern = () => {
  let start = 1;
  for (let i = 1; i <= input; i++) {
    if (i % 2 === 0) {
      start = 0;
    } else {
      start = 1;
    }
    for (let j = 1; j <= i; j++) {
      string += start;

      start = 1 - start;
    }
    string += "\n";
  }

  return string;
};

console.log(printPattern());
