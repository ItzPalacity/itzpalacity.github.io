const playerOptionsDiv = document.getElementById('playerOptions');
const playerSelectionForm = document.getElementById('playerSelectionForm');
const message = document.getElementById('message');

async function fetchPlayers() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.players;
    } catch (error) {
        console.error('Error fetching player data:', error);
    }
}

async function populatePlayerOptions() {
    const players = await fetchPlayers();
    if (players && players.length) {
        players.forEach(player => {
            const playerDiv = document.createElement('div');
            playerDiv.className = 'player';
            playerDiv.innerHTML = `
                <input type="checkbox" id="${player.name}" value="${player.name}">
                <label for="${player.name}">${player.name} (Points: ${player.points})</label>
            `;
            playerOptionsDiv.appendChild(playerDiv);
        });
    } else {
        message.textContent = "No players available.";
    }
}

playerSelectionForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const selectedPlayers = Array.from(playerOptionsDiv.querySelectorAll('input:checked'));
    if (selectedPlayers.length !== 3) {
        message.textContent = "Please select exactly 3 players.";
        return;
    }
    const playerNames = selectedPlayers.map(player => player.value).join(', ');
    message.textContent = `Players locked in for a week: ${playerNames}!`;
    // Here you would typically save the selections
});

populatePlayerOptions();
