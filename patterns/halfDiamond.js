const input = 5;
let string = "";

const printPattern = () => {
  for (let i = 1; i <= 2 * input - 1; i++) {
    let stars = i;
    if (i > input) {
      stars = 2 * input - i;
    }
    
    for (let j = 1; j <= stars; j++) {
      string += "* ";
    }

    string += "\n";
  }

  return string;
};

console.log(printPattern());
