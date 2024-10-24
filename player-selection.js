const playerSelectionContainer = document.getElementById('playerSelectionContainer');
const lockInPlayersButton = document.getElementById('lockInPlayers');
const thankYouMessage = document.getElementById('thankYouMessage');

// List of available players
const players = [
    { name: 'Player 1', points: 10 },
    { name: 'Player 2', points: 15 },
    { name: 'Player 3', points: 20 },
    { name: 'Player 4', points: 25 },
    { name: 'Player 5', points: 30 },
];

// Check for existing username
const username = localStorage.getItem('username');

if (username) {
    // Create checkboxes for player selection
    players.forEach((player, index) => {
        const playerDiv = document.createElement('div');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `player${index}`;
        checkbox.value = player.name;
        playerDiv.appendChild(checkbox);
        const label = document.createElement('label');
        label.htmlFor = `player${index}`;
        label.appendChild(document.createTextNode(player.name));
        playerDiv.appendChild(label);
        playerSelectionContainer.appendChild(playerDiv);
    });

    // Load selected players from localStorage
    const selectedPlayers = JSON.parse(localStorage.getItem('selectedPlayers')) || [];

    // Disable already selected players
    if (selectedPlayers.length >= 3) {
        lockInPlayersButton.style.display =
