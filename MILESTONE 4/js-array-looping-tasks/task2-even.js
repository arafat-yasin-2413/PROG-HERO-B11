const numbers = [12, 98, 5, 41, 23, 78, 46];

let evenArray = [];

for(let num of numbers) {
    if(num % 2 == 0) {
        evenArray.push(num);
    }
}

console.log(evenArray);