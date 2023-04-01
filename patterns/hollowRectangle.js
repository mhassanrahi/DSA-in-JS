const input = 5;
let string = "";

const printPattern = () => {
  for (let i = 1; i <= input; i++) {
    for (let j = 1; j <= input; j++) {
        if (i === 1 || i === input || j === 1 || j=== input)
        {
            string += "*";
        } else {
            string += " ";
        }
    //   string += String.fromCharCode(i + 64) + ' ';
    }
    string += "\n";
  }

  return string;
};

console.log(printPattern());
