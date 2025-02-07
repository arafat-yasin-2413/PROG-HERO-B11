const { type } = require("os");
const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});



rl.question("Enter a number : ", (n1) => {
   rl.question("Enter another number : ", (n2) => {
    
    let num1 = parseInt(n1);
    let num2 = parseInt(n2);

    let result = (num1 > num2) ? num1 * 2 : num1 + num2; 

    console.log(result);

       
       
       
       rl.close();
    });
});