var checkForSubmit = document.getElementById('the-form');
var firstName = document.getElementById('first-name');
var lastName = document.getElementById('last-name');
var email = document.getElementById('email');
var message = document.getElementById('message');

function formLog(event) {
    event.preventDefault();
    console.log('The firstName is: ' + firstName.value);
    console.log('The lastName is: ' + lastName.value);
    console.log('The email is: ' + email.value);
    console.log('The message is: ' + message.value);
}

checkForSubmit.addEventListener('submit', formLog);
