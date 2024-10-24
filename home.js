document.addEventListener("DOMContentLoaded", function () {
    const usernameDisplay = document.getElementById("usernameDisplay");
    const logoutButton = document.getElementById("logoutButton");

    // Load username from local storage
    const username = localStorage.getItem("username");
    if (username) {
        usernameDisplay.textContent = `Logged in as: ${username}`;
        logoutButton.style.display = "inline"; // Show logout button
    } else {
        logoutButton.style.display = "none"; // Hide logout button if not logged in
        alert("Please register first."); // Alert if not logged in
        window.location.href = "index.html"; // Redirect to registration page
    }

    // Logout button click event
    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('username'); // Remove user from local storage
        window.location.href = "index.html"; // Redirect to registration page
    });
});
