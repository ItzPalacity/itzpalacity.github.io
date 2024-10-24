// player-selection.js

const playerDataUrl = 'data.json';

async function fetchPlayerData() {
    const response = await fetch(playerDataUrl);
    return await response.json();
}

async function lockInPlayers(selectedPlayers) {
    const response = await fetch(playerDataUrl);
    const data = await response.json();

    // Assuming you have a way to identify users; using 'user1' as a placeholder
    const userId = 'user1'; 
    data.userSelections[userId] = selectedPlayers;

    // Update data.json with new selections
    await fetch(playerDataUrl, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    const data = await fetchPlayerData();
    const playerList = document.getElementById('player-list');
    const lockInButton = document.getElementById('lock-in-button');
    const selectedPlayers = [];

    data.players.forEach(player => {
        const playerItem = document.createElement('div');
        playerItem.textContent = player.name;
        playerItem.className = 'player-item';
        
        playerItem.onclick = () => {
            if (selectedPlayers.length < 3 && !selectedPlayers.includes(player.name)) {
                selectedPlayers.push(player.name);
                playerItem.classList.add('selected');
            }
            if (selectedPlayers.length === 3) {
                lockInButton.disabled = false; // Enable the button when 3 players are selected
            }
        };

        playerList.appendChild(playerItem);
    });

    lockInButton.onclick = () => {
        if (selectedPlayers.length === 3) {
            lockInPlayers(selectedPlayers);
            alert('Players locked in!');
            lockInButton.disabled = true; // Disable the button after locking in players
        }
    };
});
