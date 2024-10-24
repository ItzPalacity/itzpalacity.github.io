let registeredUser = null;

document.getElementById('sign-up-button').onclick = function() {
    document.getElementById('sign-up-modal').style.display = 'block';
}

document.querySelector('.close').onclick = function() {
    document.getElementById('sign-up-modal').style.display = 'none';
}

document.getElementById('register-button').onclick = function() {
    const username = document.getElementById('username').value;
    if (username) {
        registeredUser = username;
        localStorage.setItem('registeredUser', registeredUser);
        document.getElementById('registration-message').innerText = `Welcome, ${registeredUser}! You can now select your players.`;
        document.getElementById('sign-up-modal').style.display = 'none';
    } else {
        document.getElementById('registration-message').innerText = 'Please enter a valid username.';
    }
}

// Check for registered user
const storedUser = localStorage.getItem('registeredUser');
if (storedUser) {
    registeredUser = storedUser;
    document.getElementById('registration-message').innerText = `Welcome back, ${registeredUser}!`;
}
