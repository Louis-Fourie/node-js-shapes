// Open new terminal
// Navigate to the directory where the shapes.js file is located
// Type 'node shapes.js'

// require readline for reading user input
const readline = require('readline');

// draw triangle
function triangle(n) {
    for (let i = 0; i < n; i++){
        let row = '';
        for (let j = 0; j <= i; j++){
            row += '* ';
        }
        console.log(row);
    }
}
// draw square
function square(n) {
    for (let i = 0; i < n; i++) {
        let row = '';
        for (let j = 0; j < n; j++) {
            row += '* ';
        }
        console.log(row);
    }
}
// draw diamond
function diamond(n) {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= n - i; j++) {
            row += ' ';
        }
        for (let k = 1; k <= i; k++) {
            row += '* ';
        }
        console.log(row);
    }
    for (let i = n; i >= 1; i--) {
        let row = '';
        for (let j = 1; j <= n - i; j++) {
            row += ' ';
        }
        for (let k = i; k >= 1; k--) {
            row += '* ';
        }
        console.log(row);
    }
}

// create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Menu
console.log('Choose a shape:\n1. Triangle\n2. Square\n3. Diamond');
rl.question('Enter your choice: ', (shapeChoice) => {
    const shape = parseInt(shapeChoice);

    rl.question('Choose a size (3-20 is recommended for aesthetic reasons): ', (sizeChoice) => {
        const size = parseInt(sizeChoice);

        switch (shape) {
            case 1:
                triangle(size);
                break;
            case 2:
                square(size);
                break;
            case 3:
                diamond(size);
                break;
            default:
                console.log('Invalid choice');
                break;
        }

        rl.close();
    });
});