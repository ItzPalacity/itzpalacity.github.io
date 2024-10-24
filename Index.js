const signUpButton = document.getElementById('sign-up-button');
const modal = document.getElementById('sign-up-modal');
const closeModalButton = document.getElementById('close-modal');
const registerButton = document.getElementById('register-button');
const usernameInput = document.getElementById('username-input');
const usernameDisplay = document.getElementById('username-display');
const registrationError = document.getElementById('registration-error');

signUpButton.onclick = function() {
    modal.style.display = 'block';
}

closeModalButton.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

registerButton.onclick = function() {
    const username = usernameInput.value.trim();
    if (username) {
        const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || {};
        if (!registeredUsers[username]) {
            registeredUsers[username] = { players: [] };
            localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
            usernameDisplay.innerText = username;
            modal.style.display = 'none';
            usernameInput.value = '';
            window.location.href = 'player-selection.html'; // Redirect to player selection
        } else {
            registrationError.innerText = 'Username already exists!';
        }
    } else {
        registrationError.innerText = 'Please enter a username.';
    }
}
