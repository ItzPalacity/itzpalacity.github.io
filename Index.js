const signUpButton = document.getElementById('signUpButton');
const registerModal = document.getElementById('registerModal');
const closeModal = document.getElementsByClassName('close')[0];
const registerButton = document.getElementById('registerButton');
const usernameInput = document.getElementById('usernameInput');
const usernameDisplay = document.getElementById('usernameDisplay');
const logoutButton = document.getElementById('logoutButton');

// Open modal on sign-up button click
signUpButton.onclick = function() {
    registerModal.style.display = "block";
};

// Close modal
closeModal.onclick = function() {
    registerModal.style.display = "none";
};

// Register username
registerButton.onclick = function() {
    const username = usernameInput.value;
    if (username) {
        localStorage.setItem('username', username);
        usernameDisplay.innerText = username;
        usernameDisplay.style.display = 'block';
        logoutButton.style.display = 'inline';
        registerModal.style.display = "none";
        signUpButton.style.display = "none"; // Hide sign-up button after registration
        // Redirect to player selection after registration
        window.location.href = 'player-selection.html';
    }
};

// Logout functionality
logoutButton.onclick = function() {
    localStorage.removeItem('username');
    usernameDisplay.innerText = '';
    logoutButton.style.display = 'none';
    signUpButton.style.display = "inline"; // Show sign-up button again
    window.location.href = 'index.html'; // Redirect to homepage
};

// Load username on page load
window.onload = function() {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
        usernameDisplay.innerText = storedUsername;
        logoutButton.style.display = 'inline';
        signUpButton.style.display = "none"; // Hide sign-up button if logged in
    }
};
