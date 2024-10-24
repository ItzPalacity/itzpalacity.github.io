const playerOptionsDiv = document.getElementById('playerOptions');
const playerSelectionForm = document.getElementById('playerSelectionForm');
const message = document.getElementById('message');

// Function to fetch player data
async function fetchPlayers() {
    const response = await fetch('data.json');
    const data = await response.json();
    return data.players;
}

// Function to populate player selection options
async function populatePlayerOptions() {
    const players = await fetchPlayers();
    players.forEach(player => {
        const playerDiv = document.createElement('div');
        playerDiv.className = 'player';
        playerDiv.innerHTML = `
            <input type="checkbox" id="${player.name}" value="${player.name}">
            <label for="${player.name}">${player.name} (Points: ${player.points})</label>
        `;
        playerOptionsDiv.appendChild(playerDiv);
    });
}

playerSelectionForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const selectedPlayers = Array.from(playerOptionsDiv.querySelectorAll('input:checked'));
    if (selectedPlayers.length !== 3) {
        message.textContent = "Please select exactly 3 players.";
        return;
    }
    message.textContent = "Players locked in for a week!";
    // Here you would typically save the selections
});

// Initial call to populate player options
populatePlayerOptions();
