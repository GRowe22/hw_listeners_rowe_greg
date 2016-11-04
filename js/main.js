var countClicks = document.getElementById('clicks-h1');

function modifyHTML() {
    var heading = document.getElementById('clicks-h1');
    heading.innerHTML = 'This is click number';
}

document.getElementById('clicks-h1').addEventListener("click", modifyHTML)
