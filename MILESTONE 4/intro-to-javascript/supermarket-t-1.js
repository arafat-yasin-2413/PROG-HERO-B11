const readline = require("readline");


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("How much money do you have : ", (taka) => {
    let money = parseInt(taka);
    rl.question("komola o apeler mot daam likho : ", (taka2) => {
        let cost = parseInt(taka2);



        
        // console.log(money);
        // console.log(cost);
        
        console.log(money - cost);
        rl.close();

    });
   
}); 



