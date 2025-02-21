const sections = document.querySelectorAll('section');

for (const section of sections) {
    section.style.border = '3px solid steelblue';
    section.style.marginBottom = '5px';
    section.style.padding = '7px';
    section.style.borderRadius = '15px';

    section.style.backgroundColor = 'lightgray';
}

const placesContainer = document.getElementById('places-container');
placesContainer.style.backgroundColor = 'yellow';



placesContainer.classList.add('yellow-bg');
placesContainer.classList.add('text-center');
placesContainer.classList.remove('large-text'); 