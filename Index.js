document.addEventListener("DOMContentLoaded", function () {
    const usernameDisplay = document.getElementById("usernameDisplay");
    const registerButton = document.getElementById("registerButton");
    const signupButton = document.getElementById("signupButton");
    const registrationDiv = document.getElementById("registration");
    const cancelButton = document.getElementById("cancelButton");
    const logoutButton = document.getElementById("logoutButton");

    // Load username from local storage
    const username = localStorage.getItem("username");
    if (username) {
        usernameDisplay.textContent = `Logged in as: ${username}`;
        signupButton.style.display = "none"; // Hide sign-up button after logging in
        logoutButton.style.display = "inline"; // Show logout button
    } else {
        logoutButton.style.display = "none"; // Hide logout button if not logged in
    }

    // Sign up button click event
    signupButton.addEventListener("click", function () {
        registrationDiv.style.display = "block"; // Show registration input
        console.log("Sign-up button clicked"); // Debugging
    });

    // Register button click event
    registerButton.addEventListener("click", function () {
        const usernameInput = document.getElementById("usernameInput").value;
        const passwordInput = document.getElementById("passwordInput").value;

        if (usernameInput && passwordInput) {
            const users = JSON.parse(localStorage.getItem("users")) || [];

            // Check if the username already exists
            if (!users.some(user => user.username === usernameInput)) {
                users.push({ username: usernameInput, password: passwordInput, selections: [] });
                localStorage.setItem("users", JSON.stringify(users));
                localStorage.setItem("username", usernameInput);
                usernameDisplay.textContent = `Logged in as: ${usernameInput}`;
                signupButton.style.display = "none"; // Hide sign-up button after registering
                registrationDiv.style.display = "none"; // Hide registration input
                alert("Registration successful!"); // Confirmation
            } else {
                alert("Username already exists. Please choose a different username.");
            }
        } else {
            alert("Please enter a username and password.");
        }
    });

    // Cancel button click event
    cancelButton.addEventListener("click", function () {
        registrationDiv.style.display = "none"; // Hide registration input when canceling
    });

    // Logout button click event
    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('username'); // Remove user from local storage
        location.reload(); // Refresh page
    });
});
