const wholeBody = document.getElementById('whole-body');
const themeButton = document.getElementById('theme-btn');


const allColor = ['bg-blue-200', 'bg-red-200','bg-purple-200','bg-green-200','bg-yellow-200'];
let idx = 0;

themeButton.addEventListener('click', function() {
    for (let i = 0; i<allColor.length; i++) {
        wholeBody.classList.remove(allColor[i]);
    }


    wholeBody.classList.add(allColor[idx]);

    idx = (idx + 1) % (allColor.length);
});