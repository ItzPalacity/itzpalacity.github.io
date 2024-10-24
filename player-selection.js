const playerList = document.getElementById('player-list');
const lockInPlayersButton = document.getElementById('lock-in-players');
const confirmationMessage = document.getElementById('confirmation-message');
const errorMessage = document.getElementById('error-message');
const usernameDisplay = document.getElementById('username-display');

let selectedPlayers = [];
let currentUsername = usernameDisplay.innerText;

if (currentUsername) {
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || {};
    const userData = registeredUsers[currentUsername];
    if (userData && userData.players.length > 0) {
        confirmationMessage.innerText = `You have already selected: ${userData.players.join(', ')}`;
        lockInPlayersButton.disabled = true;
        return;
    }
} else {
    errorMessage.innerText = 'You must be registered to select players.';
    lockInPlayersButton.disabled = true;
}

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        data.players.forEach(player => {
            const label = document.createElement('label');
            label.innerHTML = `<input type="checkbox" class="player-checkbox" value="${player.name}"> ${player.name}`;
            playerList.appendChild(label);
        });
    });

lockInPlayersButton.onclick = function() {
    const checkboxes = document.querySelectorAll('.player-checkbox:checked');
    if (checkboxes.length === 3) {
        checkboxes.forEach(checkbox => selectedPlayers.push(checkbox.value));
        const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers'));
        registeredUsers[currentUsername].players = selectedPlayers;
        localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

        confirmationMessage.innerText = 'Thank you for picking! You can come transfer in a week.';
        lockInPlayersButton.disabled = true;
        playerList.style.display = 'none';
    } else {
        errorMessage.innerText = 'Please select exactly 3 players.';
    }
}
