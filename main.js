document.getElementById('login').addEventListener('click', function (e) {
    alert('Welcome!!');
    var usernameValue = document.getElementById('username');
    var passwordValue = document.getElementById('password');
    alert('Welcome ' + usernameValue.value + '!');
    alert('Your password is ' + passwordValue.value + '!');

    //loging here
    


})

chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
    let url = tabs[0].url;
    // use `url` here inside the callback because it's asynchronous!
    if (url === "https://api.stripe.com ") {

    }

});