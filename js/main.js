var heading = document.getElementById('clicks-h1');
var clickCounter = 0;

function recordClicks() {
    clickCounter = clickCounter + 1;
    console.log(clickCounter);
}

heading.addEventListener('click', recordClicks);
