document.addEventListener("DOMContentLoaded", function() {
    const playerSelectionArea = document.getElementById('player-selection-area');
    const lockPlayersButton = document.getElementById('lock-players');
    let selectedPlayers = [];

    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            data.players.forEach(player => {
                const playerDiv = document.createElement('div');
                const playerCheckbox = document.createElement('input');
                playerCheckbox.type = 'checkbox';
                playerCheckbox.value = player.name;
                playerCheckbox.id = player.name;

                const playerLabel = document.createElement('label');
                playerLabel.htmlFor = player.name;
                playerLabel.textContent = player.name;

                playerDiv.appendChild(playerCheckbox);
                playerDiv.appendChild(playerLabel);
                playerSelectionArea.appendChild(playerDiv);
            });
        })
        .catch(error => console.error('Error fetching player data:', error));

    lockPlayersButton.addEventListener('click', () => {
        const checkboxes = playerSelectionArea.querySelectorAll('input[type="checkbox"]:checked');
        if (checkboxes.length !== 3) {
            alert('Please select exactly 3 players.');
            return;
        }
        
        selectedPlayers = Array.from(checkboxes).map(checkbox => checkbox.value);
        alert('Players locked: ' + selectedPlayers.join(', '));

        // Disable checkboxes after selection
        checkboxes.forEach(checkbox => {
            checkbox.disabled = true;
        });
        lockPlayersButton.disabled = true; // Disable the lock button
    });
});
