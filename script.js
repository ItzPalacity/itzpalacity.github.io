const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || {};

document.getElementById('sign-up-btn').addEventListener('click', function() {
    document.getElementById('register-container').style.display = 'block';
});

document.getElementById('register-btn').addEventListener('click', function() {
    const usernameInput = document.getElementById('username').value.trim();
    
    if (usernameInput && !registeredUsers[usernameInput]) {
        registeredUsers[usernameInput] = { players: [] };
        localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
        displayUser(usernameInput);
        alert('Registration successful!');
        document.getElementById('username').value = '';
        document.getElementById('register-container').style.display = 'none'; // Hide the input after registration
    } else if (registeredUsers[usernameInput]) {
        alert('Username already taken. Please choose another.');
    } else {
        alert('Please enter a username.');
    }
});

function displayUser(username) {
    const userDisplay = document.getElementById('user-display');
    userDisplay.innerHTML = `Logged in as: ${username} <button id="logout-btn">Log Out</button>`;
    document.getElementById('logout-btn').addEventListener('click', function() {
        userDisplay.innerHTML = '';
    });
}
