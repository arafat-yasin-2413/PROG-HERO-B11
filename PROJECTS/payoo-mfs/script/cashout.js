document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();

    const pinNumber = parseInt(document.getElementById('cashout-pin-number').value);

    const cashoutAmount = document.getElementById('cashout-amount').value;
    const convertedCashoutAmount = parseFloat(cashoutAmount);
    
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);


    if (pinNumber === 1234) {
        const newBalance = convertedMainBalance - convertedCashoutAmount;
        document.getElementById('main-balance').innerText = newBalance;
    }
    else {
        alert('pin is not okay'); 
    }

})