var heading = document.getElementsByTagName('main-heading');

function modifyHTML () {
    var daBoys = document.getElementsByTagName('main-heading');
    daBoys.innerHTML = 'DA BOYS!';
}

heading.addEventListener("click", modifyHTML);
