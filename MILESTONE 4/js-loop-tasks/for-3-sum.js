let oddSum = 0;

for(let i = 91; i<= 129; i++) {
    if(i % 2 != 0) {
        oddSum += i;
    }
}


let evenSum = 0;
for(let i = 51; i<= 85; i++) {
    if(i % 2 == 0) {
        evenSum += i;
    }
}


console.log("oddSum = ",oddSum);
console.log("evenSum = ",evenSum);