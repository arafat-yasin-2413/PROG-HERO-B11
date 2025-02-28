document.getElementById('transaction-history-box').addEventListener('click', function(){
    handleToggleById('add-money-section','none');
    handleToggleById('cash-out-section','none');
    handleToggleById('transaction-history-section','block');
})