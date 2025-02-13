const st1 = 'Uniform apple indigo';


let countOfA = 0;
let countOfE = 0;
let countOfI = 0; 
let countOfO = 0;
let countOfU = 0;

for(let letter of st1) {
    if(letter.toLowerCase() === 'a') {
        countOfA++;
    }
    else if(letter.toLowerCase() === 'e') {
        countOfE++;
    }
    else if(letter.toLowerCase() === 'i') {
        countOfI++;
    }
    else if(letter.toLowerCase() === 'o') {
        countOfO++;
    }
    else if(letter.toLowerCase() === 'u') {
        countOfU++;
    }
}


// console.log(countOfA);
// console.log(countOfE);
// console.log(countOfI);
// console.log(countOfO);
// console.log(countOfU);

if(countOfA > 0 && countOfE > 0 && countOfI > 0 && countOfO > 0 && countOfU > 0) {
    console.log("This string has all vowels");

}

else {
    console.log("This string doesn't have all the vowels");
}