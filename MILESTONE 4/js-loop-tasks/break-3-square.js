// console.log(Math.sqrt(16));

/**
 * let num = Math.sqrt(15);

console.log(num);
console.log(typeof num);


console.log(Number.isInteger(4.58)); 
 * 
 * 
 */

for (let i = 1; i<=100; i++) {
    console.log("i : ",i);

    let num = Math.sqrt(i);

    if( i > 1 && Number.isInteger(num)) {
        console.log("First square found. it is : ",i);
        break;
    }
}

