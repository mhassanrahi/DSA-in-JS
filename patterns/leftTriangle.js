const input = 5;
let string = '';

const printPattern = () => {
    for (let i = 0; i < input; i++) {
        for (let j = 0; j <= i; j++) {
            string += "*";
        }
        string += "\n";
    }

    return string
}

console.log(printPattern())