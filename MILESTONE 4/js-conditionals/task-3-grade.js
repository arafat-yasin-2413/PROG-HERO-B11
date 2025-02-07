const { type } = require("os");
const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});



rl.question("Enter your marks (between 1 and 100) : ", (mark) => {
    // console.log(typeof mark);
    let marks = parseInt(mark);

    // console.log(typeof marks);


    if (marks > 0 && marks <= 59)
    {
        console.log("F grade");
    }

    else if(marks >= 60 && marks <= 69)
    {
        console.log("D grade");
    }

    else if(marks >= 70 && marks <= 79)
    {
        console.log("C grade");
    }

    else if(marks >= 80 && marks <= 89)
    {
        console.log("B grade");
    }

    else if(marks >= 90 && marks <= 100)
    {
        console.log("A grade");
    }

    else 
    {
        console.log("Invalid marks");
    }
    


    rl.close();
});