const st1 = 'HAey nana! I am eating banana';

// console.log(st1.length);
let len = st1.length;

let count = 0;
for(let letter of st1) {
    // console.log(letter);
    if (letter.toLowerCase() === 'a') {
        count++;
    }
}

console.log("Total number of a : ",count);