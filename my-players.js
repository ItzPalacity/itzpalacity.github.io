const registeredUser = localStorage.getItem('registeredUser');

document.addEventListener('DOMContentLoaded', function() {
    if (registeredUser) {
        const selectedPlayers = JSON.parse(localStorage.getItem(`selectedPlayers_${registeredUser}`));
        const playerList = document.getElementById('selected-players');

        if (selectedPlayers && selectedPlayers.length > 0) {
            selectedPlayers.forEach(player => {
                const playerItem = document.createElement('div');
                playerItem.textContent = player;
                playerList.appendChild(playerItem);
            });
        } else {
            playerList.textContent = 'You have not selected any players yet.';
        }
    } else {
        document.getElementById('selected-players').textContent = 'Please register to view your players.';
    }
});
