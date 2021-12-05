import login from './login.js';

document.getElementById('login').addEventListener('click', function (e) {
   
    var usernameValue = document.getElementById('username');
    var passwordValue = document.getElementById('password');
    alert('You signed in!');

 login(usernameValue.value, passwordValue.value);
    


})

chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
    let url = tabs[0].url;
    // use `url` here inside the callback because it's asynchronous!
    if (url === "https://api.stripe.com ") {

    }

});