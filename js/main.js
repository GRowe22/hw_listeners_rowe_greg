var checkForSubmit = document.getElementById('the-form');
var firstName = document.getElementById('first-name');
var lastName = document.getElementById('last-name');
var email = document.getElementById('email');
var message = document.getElementById('message');

function formLog() {
    var submitClick = document.getElementById('the-form');
    submitClick.preventDefault();
    console.log('The firstName is: ' + firstName);
    console.log('The lastName is: ' + lastName);
    console.log('The email is: ' + email);
    console.log('The message is: ' + message);
}

checkForSubmit.addEventListener('action', formLog);
