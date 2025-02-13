let school = 'ebac public school';

let words = school.split(' ');
console.log(words);

console.log(words[0]);
console.log(words[1]);
console.log(words[2]);

console.log(words.length);


for(let i = 0; i<words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    // words.join(' ');
}

console.log(words.join(' '));