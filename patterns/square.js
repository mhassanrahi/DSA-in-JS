const input = 4;
let string = '';

const printPattern = () => {
    for (let i = 0; i < input; i++) {
        for (let j = 0; j < input; j++) {
            string += "*";
        }
        string += "\n";
    }

    return string
}

console.log(printPattern())