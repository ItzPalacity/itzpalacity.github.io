document.addEventListener("DOMContentLoaded", function () {
    const usernameDisplay = document.getElementById("usernameDisplay");
    const registerButton = document.getElementById("registerButton");
    const registrationContainer = document.getElementById("registrationContainer");
    const logoutButton = document.getElementById("logoutButton");
    const usernameInput = document.getElementById("usernameInput");
    const passwordInput = document.getElementById("passwordInput");

    // Load username from local storage
    const username = localStorage.getItem("username");
    if (username) {
        usernameDisplay.textContent = `Logged in as: ${username}`;
        registrationContainer.style.display = "none"; // Hide registration input after logging in
        logoutButton.style.display = "inline"; // Show logout button
        document.getElementById("leaderboard").style.display = "block"; // Show leaderboard
        document.getElementById("playerSelection").style.display = "block"; // Show player selection
    } else {
        logoutButton.style.display = "none"; // Hide logout button if not logged in
    }

    // Register button click event
    registerButton.addEventListener("click", function () {
        const usernameInputValue = usernameInput.value;
        const passwordInputValue = passwordInput.value;

        if (usernameInputValue && passwordInputValue) {
            const users = JSON.parse(localStorage.getItem("users")) || [];

            // Check if the username already exists
            if (!users.some(user => user.username === usernameInputValue)) {
                users.push({ username: usernameInputValue, password: passwordInputValue, selections: [] });
                localStorage.setItem("users", JSON.stringify(users));
                localStorage.setItem("username", usernameInputValue);
                usernameDisplay.textContent = `Logged in as: ${usernameInputValue}`;
                registrationContainer.style.display = "none"; // Hide registration input after registering
                alert("Registration successful!"); // Confirmation
                // Show leaderboard and player selection areas
                document.getElementById("leaderboard").style.display = "block"; // Show leaderboard
                document.getElementById("playerSelection").style.display = "block"; // Show player selection
            } else {
                alert("Username already exists. Please choose a different username.");
            }
        } else {
            alert("Please enter a username and password.");
        }
    });

    // Logout button click event
    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('username'); // Remove user from local storage
        location.reload(); // Refresh page
    });
});
