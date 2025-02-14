const statement = 'I am a hard working person';

const sentence = statement.split(' ');
// console.log(sentence);


let reversedSentence = "";

for (let i = sentence.length-1; i>=0; i--) {
    let word = sentence[i];
    // console.log(word);
    reversedSentence += word;
    
    if(i !==0 ) {
        reversedSentence += ' ';
    }

}

console.log(reversedSentence);