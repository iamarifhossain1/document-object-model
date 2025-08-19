// 1. Parent Node

const mainContainer = document.getElementById('main-container');
console.log(mainContainer);


// 2. Create Child Node

const placeSection = document.createElement('section');
// create h1

const h1 = document.createElement('h1');

h1.innerText = 'This is my new Heading'
placeSection.appendChild(h1);
const ul = document.createElement('ul');
const li1 = document.createElement('li')
const li2 = document.createElement('li');
const li3 = document.createElement('li');
li1.innerText = 'Dhaka'
li2.innerText = 'Chattrogram'
li3.innerText = 'Sylhet'
ul.appendChild(li1);
ul.appendChild(li2)
ul.appendChild(li3)

placeSection.appendChild(ul);

// 3. append placeSection to mainContainer

mainContainer.append(placeSection)


// Easier to create HTML

const bookSection = document.createElement('section');

bookSection.innerHTML = `
<h1>Book i need to Read</h1>
<u>
    <li>Physics</li>
    <li>Chemistry</li>
    <li>Biology</li>
    <li>Higher Math</li>
</ul>
`

mainContainer.appendChild(bookSection);