var firstName = document.getElementById('first-name');

var lastName = document.getElementById('last-name');

var email = document.getElementById('email');

var message = document.getElementById('message');

var submitClick = document.getElementsByName('form');
submitClick.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('The firstName is: ' + firstName);
    console.log('The lastName is: ' + lastName);
    console.log('The email is: ' + email);
    console.log('The message is: ' + message);
});
