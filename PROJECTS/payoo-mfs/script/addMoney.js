document.getElementById('cash-out-section').style.display = "none";


document.getElementById('add-money-box').addEventListener('click', function(){
    document.getElementById('add-money-section').style.display = 'block';
    document.getElementById('cash-out-section').style.display = "none";
})



document.getElementById('cash-out-box').addEventListener('click', function(){
    document.getElementById('cash-out-section').style.display = "block";    
    document.getElementById('add-money-section').style.display = "none";    
})















document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();

    const accountNumber = document.getElementById('account-number').value;

    const amount = document.getElementById('amount').value;
    const convertedAmount = parseFloat(amount);
    
    const pinNumber = parseInt(document.getElementById('pin-number').value);
    
    const mainBalance = document.getElementById('main-balance');
    const convertedMainBalance = parseFloat(mainBalance.innerText);



    // if(amount && pinNumber) {
    //     if(pinNumber === 1234) {
    //         const sum = convertedMainBalance + convertedAmount;
            
    //         // document.getElementById('main-balance').innerText = sum;
    //         mainBalance.innerText = sum;
    //         console.log('money add korsi');
    
    
    //     }
    //     else {
    //         alert('pin sothik na');
    //     }
    // }

    // else {
    //     alert('enter amount');
    // }

    if(accountNumber.length === 11) {
        if (pinNumber === 1234) {
            const sum = convertedMainBalance + convertedAmount;
            mainBalance.innerText = sum;
        }

        else {
            alert('pin number vul');
        }
    
    }

    else {
        alert('account number thik nai');
    }

    

})