clearHistoryButton = document.getElementById('clear-history-btn');
activityDiv = document.getElementById('activity-div');

clearHistoryButton.addEventListener('click', function(){
    activityDiv.innerHTML = '';
})