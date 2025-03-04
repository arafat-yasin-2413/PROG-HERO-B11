document.getElementById('add-money-btn').addEventListener('click', function(event) {
    event.preventDefault();


    const currentBalance = getInnerTextById('main-balance');
    const amount = getInputValueById('amount');
    const pinNumber = getInputValueById('pin-number');
    const accountNumber = document.getElementById('account-number').value;
    const selectedBank = document.getElementById('allbank').value;


    if(amount < 0) {
        alert('amount must be positive');
        return;
    }


    if(accountNumber.length === 11) {
        if(pinNumber === 1234) {
            const sum = currentBalance + amount;
            setInnerTextByIdAndValue('main-balance',sum);
            document.getElementById('amount').value = '';


            const transacContainer = document.getElementById('transaction-container');
            const div = document.createElement("div");
            div.classList.add("bg-red-400")
            
            div.innerHTML = `
            <h1 class="text-yellow-300">ADDed Money form ${selectedBank}</h1>
            <h3>${amount}$</h3> 
            <p>account number: ${accountNumber}</p>

          
            `
            transacContainer.appendChild(div)

            

        }
        else {
            alert('pin thik nai');
        }
    }   

    else {
        alert('account number thik nai');
    }


})