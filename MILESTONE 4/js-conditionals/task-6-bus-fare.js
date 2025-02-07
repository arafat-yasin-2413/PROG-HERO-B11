const { type } = require("os");
const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question("Enter age: ", (ag) => {
	let age = parseInt(ag);

	let busFare = 800;

	if (age < 10) 
    {
        busFare = 0;
    }    

    else if(age > 10 && age <= 22)
    {
        busFare = busFare - (busFare * .5);
    }

    else if (age >= 60)
    {
        busFare = busFare - (busFare * .15);
    }

    console.log(busFare);

        
        
    rl.close();
});
