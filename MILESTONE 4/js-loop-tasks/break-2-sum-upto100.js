let sum = 0;
let i = 1;

while(true) {
    sum += i;
    console.log("i : ",i);
    
    if(sum >= 100) {
        break;
    }
    i++;
}

console.log(sum);
