document.getElementById('cash-out-btn').addEventListener('click', function(event) {
    event.preventDefault();


    const currentBalance = getInnerTextById('main-balance');
    const amount = getInputValueById('cashout-amount');
    const pinNumber = getInputValueById('cashout-pin-number');
    const accountNumber = document.getElementById('account-number').value;

    if(amount > currentBalance) {
        alert('amount can\'t be greater than current balance');
        return;
    }



    if(accountNumber.length === 11) {
        if(pinNumber === 1234) {
            const balance = currentBalance - amount;
            setInnerTextByIdAndValue('main-balance',balance);
            document.getElementById('cashout-amount').value = '';


            const transacContainer = document.getElementById('transaction-container');
            const p = document.createElement('p');
            p.innerText = `
                Cashout of ${amount}$ from ${accountNumber} account
            
            `;

            transacContainer.appendChild(p);


        }
        else {
            alert('pin thik nai');
        }
    }   

    else {
        alert('account number thik nai');
    }




})