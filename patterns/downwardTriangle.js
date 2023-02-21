const input = 5;
let string = '';

const printPattern = () => {
    for (let i = 1; i <= input; i++) {
        for (let j = 1; j <= input - i + 1; j++) {
            string += '* ';
        }
        string += "\n";
    }

    return string
}

console.log(printPattern())