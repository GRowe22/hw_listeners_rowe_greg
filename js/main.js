//This code listens for a click on the "main-heading" and changes the text to "DA Boys"
var heading = document.getElementById('main-heading');

function modifyHTML() {
    var daBoys = document.getElementById('main-heading');
    daBoys.innerHTML = 'DA BOYS!';
}

heading.addEventListener('click', modifyHTML);

//This code listens for a mouseover on the "sub-heading" and changes the text color to white
var subHeading = document.getElementById('sub-heading');

function changeColor() {
    var allWhite = document.getElementById('sub-heading');
    allWhite.style.color = 'white';
}

subHeading.addEventListener('mouseover', changeColor);

//This code listens for a keydown (press any key) and adds some h1 content "They could go all the way!"
function addContent() {
    var newHeading = document.createElement('h1');
    var node = document.createTextNode('They Could Go All The Way!');
    newHeading.appendChild(node);
    var newElement = document.getElementById('container');
    newElement.appendChild(newHeading);
}

document.addEventListener('keydown', addContent);
