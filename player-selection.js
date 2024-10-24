document.addEventListener("DOMContentLoaded", function () {
    const username = localStorage.getItem("username");
    const selections = JSON.parse(localStorage.getItem("selections")) || {};
    
    // Display previously selected players if they exist
    if (selections[username]) {
        document.getElementById("message").innerText = "Thank you for picking! You can come transfer in a week.";
        document.getElementById("playerSelectionForm").style.display = "none"; // Hide the selection form
        const selectedPlayers = selections[username];
        const selectedPlayersList = document.getElementById("selectedPlayers");
        selectedPlayers.forEach(player => {
            const li = document.createElement("li");
            li.textContent = player;
            selectedPlayersList.appendChild(li);
        });
    } else {
        // Fetch players from data.json and display them
        fetch("data.json")
            .then(response => response.json())
            .then(data => {
                const players = data.players;
                const playerSelectionArea = document.getElementById("playerSelection");
                players.forEach(player => {
                    const div = document.createElement("div");
                    div.innerHTML = `
                        <input type="checkbox" id="${player.name}" value="${player.name}">
                        <label for="${player.name}">${player.name}</label>
                    `;
                    playerSelectionArea.appendChild(div);
                });
            });
    }

    document.getElementById("lockInButton").addEventListener("click", function () {
        const selected = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(input => input.value);

        if (selected.length === 3) {
            selections[username] = selected; // Store selections
            localStorage.setItem("selections", JSON.stringify(selections)); // Update localStorage
            document.getElementById("message").innerText = "Thank you for picking! You can come transfer in a week.";
            document.getElementById("playerSelectionForm").style.display = "none"; // Hide the selection form
            const selectedPlayersList = document.getElementById("selectedPlayers");
            selected.forEach(player => {
                const li = document.createElement("li");
                li.textContent = player;
                selectedPlayersList.appendChild(li);
            });
        } else {
            alert("You must select exactly 3 players.");
        }
    });
});
