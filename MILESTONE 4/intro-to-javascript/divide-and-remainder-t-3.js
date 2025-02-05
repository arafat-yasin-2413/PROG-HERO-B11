const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});



rl.question("Enter a number : ", (num) => {
    let n = parseInt(num);


    console.log("input diso : ", n);

    console.log("Remainder : ", n%5);

    


    rl.close();
});