document.addEventListener("DOMContentLoaded", function () {
    const registerButton = document.getElementById("registerButton");

    // Register button click event
    registerButton.addEventListener("click", function () {
        const usernameInput = document.getElementById("usernameInput").value.trim();
        const passwordInput = document.getElementById("passwordInput").value.trim();

        if (usernameInput && passwordInput) {
            const users = JSON.parse(localStorage.getItem("users")) || [];

            // Check if the username already exists
            if (!users.some(user => user.username === usernameInput)) {
                users.push({ username: usernameInput, password: passwordInput, selections: [] });
                localStorage.setItem("users", JSON.stringify(users));
                localStorage.setItem("username", usernameInput);
                alert("Registration successful! Redirecting to home page..."); // Confirmation
                window.location.href = "home.html"; // Redirect to home page
            } else {
                alert("Username already exists. Please choose a different username.");
            }
        } else {
            alert("Please enter a username and password.");
        }
    });
});
