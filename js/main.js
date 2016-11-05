var heading = document.getElementById('main-heading');

function modifyHTML() {
    var daBoys = document.getElementById('main-heading');
    daBoys.innerHTML = 'DA BOYS!';
}

heading.addEventListener('click', modifyHTML);


var subHeading = document.getElementById('sub-heading');

function changeColor() {
    var allWhite = document.getElementById('sub-heading');
    allWhite.style.color = 'white';
}

subHeading.addEventListener('mouseover', changeColor);
