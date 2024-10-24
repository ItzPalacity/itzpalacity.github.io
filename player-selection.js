// Sample data to represent the available players
let players = [
    { id: 1, name: "Player 1", points: 10 },
    { id: 2, name: "Player 2", points: 20 },
    { id: 3, name: "Player 3", points: 30 },
    { id: 4, name: "Player 4", points: 40 },
    { id: 5, name: "Player 5", points: 50 }
];

let selectedPlayers = [];

function displayAvailablePlayers() {
    const availablePlayersDiv = document.getElementById('available-players');
    availablePlayersDiv.innerHTML = ''; // Clear previous entries

    players.forEach(player => {
        const playerDiv = document.createElement('div');
        playerDiv.innerHTML = `<input type="checkbox" id="player-${player.id}" value="${player.id}"> ${player.name}`;
        availablePlayersDiv.appendChild(playerDiv);
    });
}

function lockInPlayers() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    
    if (checkboxes.length > 3) {
        alert('You can only select 3 players!');
        return;
    } else if (checkboxes.length < 3) {
        alert('Please select 3 players before locking in!');
        return;
    }

    selectedPlayers = Array.from(checkboxes).map(checkbox => {
        return players.find(player => player.id === parseInt(checkbox.value));
    });

    console.log('Locked in players:', selectedPlayers);
    
    // Disable all checkboxes and the button
    checkboxes.forEach(checkbox => {
        checkbox.disabled = true;
    });
    document.getElementById('lock-in-players').disabled = true;

    // Display confirmation message
    const messageDiv = document.getElementById('message');
    messageDiv.innerText = 'Thank you for picking! You can come transfer in a week.';
}

// Initialize the available players on page load
displayAvailablePlayers();
document.getElementById('lock-in-players').addEventListener('click', lockInPlayers);
