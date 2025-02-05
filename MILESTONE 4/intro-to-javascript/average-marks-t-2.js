const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});



rl.question("Enter marks with space : ", (marks) => {
    let marksArray = marks.split(",").map(Number);

    // console.log(...marksArray);

    let sum = 0;
    for(let i = 0; i<marksArray.length; i++)
    {
        // console.log("i er value : ", i);
        // console.log("\n\n\n");

        // console.log(typeof marksArray[i]);
        sum += marksArray[i];
    }



    console.log("Total marks is : ", sum);
    
    let avgMarks = (sum/5);

    console.log("before ", typeof avgMarks);
    console.log("Average marks is : ", avgMarks.toFixed(2), typeof avgMarks);


    console.log(typeof avgMarks);


    rl.close();
});