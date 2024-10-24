const signUpButton = document.getElementById('signUpButton');
const registerArea = document.getElementById('registerArea');
const usernameInput = document.getElementById('usernameInput');
const registerButton = document.getElementById('registerButton');
const usernameDisplay = document.getElementById('usernameDisplay');

let registeredUsers = [];

// Load existing usernames from the database
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        registeredUsers = data.users || [];
    });

signUpButton.addEventListener('click', () => {
    registerArea.style.display = 'block';
    usernameInput.style.display = 'inline';
    registerButton.style.display = 'inline';
    signUpButton.style.display = 'none';
});

registerButton.addEventListener('click', () => {
    const username = usernameInput.value.trim();
    if (username && !registeredUsers.includes(username)) {
        registeredUsers.push(username);
        localStorage.setItem('loggedInUser', username); // Save logged in user in local storage
        updateUsernameDisplay(username);
        updateUserDatabase();
        location.reload(); // Refresh page to show buttons
    } else {
        alert('Invalid username or already taken.');
    }
});

function updateUsernameDisplay(username) {
    usernameDisplay.innerText = `Logged in as: ${username}`;
}

// Load the logged-in user on page load
window.onload = () => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        updateUsernameDisplay(loggedInUser);
        registerArea.style.display = 'none'; // Hide register area after logging in
        signUpButton.style.display = 'none'; // Hide the sign up button
    }
};

// Update data.json to save registered users
function updateUserDatabase() {
    const data = { users: registeredUsers };
    fetch('data.json', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
}
