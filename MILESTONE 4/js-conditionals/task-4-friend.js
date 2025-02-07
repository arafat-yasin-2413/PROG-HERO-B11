const { type } = require("os");
const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});



rl.question("Enter your marks (between 1 and 100) : ", (num1) => {
    let myMark = parseInt(num1);
    rl.question("Enter your friend's mark (between 1 and 100) : " , (num2) => {
        let friendsMark = parseInt(num2);
        
        
        // console.log(typeof myMark);
        // console.log(typeof friendsMark);
        

        // console.log(myMark);
        // console.log(friendsMark);

        if (myMark > 80 )
        {
            if(friendsMark > 80)
            {
                console.log("Go for a lunch");
            }

            else if(friendsMark >= 60 && friendsMark < 80)
            {
                console.log("good luck next time");
            }

            else if (friendsMark >= 40 && friendsMark < 60)
            {
                console.log("Keeping msgs unseen");
            }

            else if(friendsMark < 40)
            {
                console.log("Blocking you");
            }
        }

        else 
        {
            console.log("Go to home, sleep and act sad");
        }
        
        rl.close();
    });
});