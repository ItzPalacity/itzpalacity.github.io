const username = localStorage.getItem('username');

document.addEventListener('DOMContentLoaded', function() {
    if (username) {
        const selectedPlayers = JSON.parse(localStorage.getItem(`selections_${username}`)) || [];
        const playerList = document.getElementById('selected-players');

        if (selectedPlayers.length > 0) {
            selectedPlayers.forEach(player => {
                const playerItem = document.createElement('div');
                playerItem.textContent = player;
                playerList.appendChild(playerItem);
            });
        } else {
            playerList.textContent = 'You have not selected any players yet.';
        }
    } else {
        alert('You need to be registered to view your players.');
        window.location.href = 'index.html'; // Redirect to homepage
    }
});
