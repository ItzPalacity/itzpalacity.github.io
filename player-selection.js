let selectedPlayers = [];

async function fetchPlayerData() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        const playerList = document.getElementById('player-list');

        data.players.forEach(player => {
            const li = document.createElement('li');
            li.textContent = player.name;
            li.dataset.name = player.name;
            li.dataset.points = player.points;
            li.addEventListener('click', () => selectPlayer(player));
            playerList.appendChild(li);
        });
    } catch (error) {
        console.error('Error fetching player data:', error);
    }
}

function selectPlayer(player) {
    if (selectedPlayers.length < 3 && !selectedPlayers.includes(player.name)) {
        selectedPlayers.push(player.name);
        updateSelectedPlayers();
    } else {
        alert('You can only select 3 players, or this player is already selected.');
    }
}

function updateSelectedPlayers() {
    const selectedList = document.getElementById('selected-players');
    selectedList.innerHTML = '';
    selectedPlayers.forEach(player => {
        const li = document.createElement('li');
        li.textContent = player;
        selectedList.appendChild(li);
    });
}

document.getElementById('lock-players').addEventListener('click', () => {
    if (selectedPlayers.length === 3) {
        alert('Players locked! You cannot change your selection for a week.');
        document.getElementById('player-list').innerHTML = ''; // Clear the list after locking
        selectedPlayers = [];
        updateSelectedPlayers();
    } else {
        alert('Please select exactly 3 players before locking.');
    }
});

document.addEventListener('DOMContentLoaded', fetchPlayerData);
