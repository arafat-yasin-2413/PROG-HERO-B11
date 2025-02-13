const sentence = 'I am learning Web Dev';

let reversedString = '';

for (const letter of sentence) {
    // console.log(letter);
    reversedString = letter + reversedString;
}

console.log(reversedString);


const rev = sentence.split('').reverse().join('');
console.log(rev);