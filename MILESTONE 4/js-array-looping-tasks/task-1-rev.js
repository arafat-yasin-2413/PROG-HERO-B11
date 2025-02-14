const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

let reversedColors = [];

for(const color of colors) {
    reversedColors.unshift(color);
}

console.log(reversedColors);