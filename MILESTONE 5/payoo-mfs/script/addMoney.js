document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();


    const amount = document.getElementById('amount').value;
    const convertedAmount = parseFloat(amount);
    
    const pinNumber = parseInt(document.getElementById('pin-number').value);
    
    const mainBalance = document.getElementById('main-balance');
    const convertedMainBalance = parseFloat(mainBalance.innerText);



    if(amount && pinNumber) {
        if(pinNumber === 1234) {
            const sum = convertedMainBalance + convertedAmount;
            
            // document.getElementById('main-balance').innerText = sum;
            mainBalance.innerText = sum;
            console.log('money add korsi');
    
    
        }
        else {
            alert('pin sothik na');
        }
    }

    else {
        alert('enter amount');
    }

    

})