var heading = document.getElementById('clicks-h1');
var clickCounter = 0;

function recordClicks() {
    clickCounter = clickCounter + 1;
    var paragraph = document.createElement('p');
    var node = document.createTextNode('This is click number ' + clickCounter);
    paragraph.appendChild(node);
    var element = document.getElementById('clicks-h1');
    element.appendChild(paragraph);
}

heading.addEventListener('click', recordClicks);
