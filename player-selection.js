document.addEventListener("DOMContentLoaded", function () {
    const username = localStorage.getItem("username");
    const usernameDisplay = document.getElementById("usernameDisplay");
    const lockInButton = document.getElementById("lockInButton");
    const messageDiv = document.getElementById("message");
    const playerForm = document.getElementById("playerForm");

    // Update username display
    if (username) {
        usernameDisplay.textContent = `Logged in as: ${username}`;
    } else {
        alert("Please register first.");
        window.location.href = "index.html"; // Redirect to registration page if not registered
    }

    // Load players from data.json
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const players = data.players;
            const userSelections = data.users.find(user => user.username === username).selections;

            players.forEach(player => {
                const playerLabel = document.createElement("label");
                const playerCheckbox = document.createElement("input");
                playerCheckbox.type = "checkbox";
                playerCheckbox.value = player.name;
                playerCheckbox.disabled = userSelections.length >= 3 || userSelections.includes(player.name);
                playerCheckbox.checked = userSelections.includes(player.name);
                playerLabel.appendChild(playerCheckbox);
                playerLabel.appendChild(document.createTextNode(player.name));
                playerForm.appendChild(playerLabel);
            });
        });

    lockInButton.addEventListener("click", function () {
        const selectedPlayers = Array.from(playerForm.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.value);

        if (selectedPlayers.length === 3) {
            const users = JSON.parse(localStorage.getItem("users"));
            const userIndex = users.findIndex(user => user.username === username);
            if (userIndex !== -1) {
                users[userIndex].selections = selectedPlayers;
                localStorage.setItem("users", JSON.stringify(users));
                messageDiv.textContent = "Thank you for picking! You can come transfer in a week.";
                messageDiv.style.display = "block";
                playerForm.style.display = "none"; // Hide
