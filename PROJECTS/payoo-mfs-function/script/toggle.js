document.getElementById('cash-out-section').style.display = "none";
document.getElementById('transaction-history-section').style.display = "none";

document.getElementById('add-money-box').addEventListener('click', function() {
    handleToggleById('add-money-section','block');
    handleToggleById('cash-out-section','none');
    handleToggleById('transaction-history-section','none');
})

document.getElementById('cash-out-box').addEventListener('click', function() {
    handleToggleById('cash-out-section','block');
    handleToggleById('add-money-section','none');
    handleToggleById('transaction-history-section','none');
})

