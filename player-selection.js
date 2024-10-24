const players = [
    { name: "Player 1", points: 10 },
    { name: "Player 2", points: 20 },
    { name: "Player 3", points: 30 },
    { name: "Player 4", points: 40 },
    { name: "Player 5", points: 50 }
];

let selectedPlayers = [];
const registeredUser = localStorage.getItem('registeredUser');

document.addEventListener('DOMContentLoaded', function() {
    if (registeredUser) {
        loadAvailablePlayers();
    } else {
        document.getElementById('available-players').innerText = 'Please register to select players.';
        document.getElementById('lock-in-players').disabled = true;
    }
});

function loadAvailablePlayers() {
    const playerList = document.getElementById('available-players');
    players.forEach(player => {
        const label = document.createElement('label');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = player.name;
        checkbox.className = 'player-checkbox';
        checkbox.onchange = handlePlayerSelection;
        
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(player.name));
        playerList.appendChild(label);
        playerList.appendChild(document.createElement('br'));
    });

    const savedSelection = JSON.parse(localStorage.getItem(`selectedPlayers_${registeredUser}`));
    if (savedSelection) {
        selectedPlayers = savedSelection;
        disableSelectedPlayers();
        document.getElementById('message').innerText = "Thank you for picking! You can come transfer in a week.";
    }
}

function handlePlayerSelection(event) {
    const selectedCheckboxes = document.querySelectorAll('.player-checkbox:checked');
    
    if (selectedCheckboxes.length > 3) {
        event.target.checked = false; // Uncheck the current checkbox
        return;
    }

    selectedPlayers = Array.from(selectedCheckboxes).map(checkbox => checkbox.value);
    
    if (selectedPlayers.length === 3) {
        document.getElementById('lock-in-players').disabled = false;
    } else {
        document.getElementById('lock-in-players').disabled = true;
    }
}

document.getElementById('lock-in-players').onclick = function() {
    localStorage.setItem(`selectedPlayers_${registeredUser}`, JSON.stringify(selectedPlayers));
    disableSelectedPlayers();
    document.getElementById('message').innerText = "Thank you for picking! You can come transfer in a week.";
    this.disabled = true;
};

function disableSelectedPlayers() {
    const checkboxes = document.querySelectorAll('.player-checkbox');
    checkboxes.forEach(checkbox => {
        checkbox.disabled = true;
        if (selectedPlayers.includes(checkbox.value)) {
            checkbox.checked = true;
        }
    });
}
