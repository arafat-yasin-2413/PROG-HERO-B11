// console.log('hello login');
document.getElementById('login-btn').addEventListener('click',function(event){
    event.preventDefault();
    // console.log('login btn clicked');


    const accountNumber = document.getElementById('account-number').value;
    
    const pinNumber = document.getElementById('pin-number').value;
    const convertedPinNumber = parseInt(pinNumber);

    // console.log(accountNumber.length);
    // console.log(pinNumber); 

    if(accountNumber.length === 11) {
        
        if (convertedPinNumber === 1234) {
            // console.log('pin thik ache');
            window.location.href = "./main.html";
        }
        else {
            alert('pin thik nai');    
        }

    }

    else {
        alert('need a valid account number');
    }

})  