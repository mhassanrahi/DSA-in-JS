const input = 5;
let string = '';

const printPattern = () => {
    for (let i = 0; i < input; i++) {
        // space
        for (let j = 0; j < input - i + 1; j++) {
            string += ' ';
        }
        // stars

        for (let j = 1; j <= (2 * i) + 1; j++) {
            string += '*';
        }

        // space

        for (let j = 0; j < input - i + 1; j++) {
            string += ' ';
        }

        string += "\n";
    }

    return string
}

console.log(printPattern())