const input = 5;
let string = '';

const printPattern = () => {
    for (let i = 1; i <= input; i++) {
        for (let j = 1; j <= i; j++) {
            string += j;
        }
        string += "\n";
    }

    return string
}

console.log(printPattern())