const child = document.getElementById("players").childNodes[3].childNodes[1].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
console.log(child);


const newChild = document.createElement('li');
console.log(newChild);

newChild.innerText = 'New Born Baby footballer'

const playerList = document.getElementById('player-list')
playerList.appendChild(newChild)