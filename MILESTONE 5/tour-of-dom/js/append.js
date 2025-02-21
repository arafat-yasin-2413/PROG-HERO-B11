const placesList = document.getElementById('places-list');
// console.log(placesList)


const li = document.createElement('li');
li.innerText = 'Paharpur';
placesList.appendChild(li);

// const li2 = document.createElement('li');
// li2.innerText = 'Mohasthangarh';
// placesList.appendChild(li2);






//1. where to add (the parent)

const mainContainer = document.getElementById('main-container');

//2. what to add
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food List';
section.appendChild(h1);

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'Biriyani';

const li2 = document.createElement('li');
li2.innerText = 'Borhani';

const li3 = document.createElement('li');
li3.innerText = 'Salad';

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);


section.appendChild(ul);





mainContainer.appendChild(section);







// set inner HTML directly

const sectionDress = document.createElement('section');
sectionDress.innerHTML = `

    <h1>My favorite dress code</h1>

    <ul>
        <li>Shirt</li>
        <li>Pant</li>
        <li>Tie</li>
        <li>Shoe</li>
    </ul>
`

mainContainer.appendChild(sectionDress);