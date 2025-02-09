let oddSum = 0;
let i = 81;

while(i<=131) {
    if(i % 2 != 0) {
        oddSum += i;
    }
    i++;
}


let evenSum = 0;
let j =206; 

while(j<=311) {
    if(j % 2 == 0) {
        evenSum += j;
    }
    j++;
}


console.log("oddsum = ", oddSum);

console.log("evensum = ", evenSum);
