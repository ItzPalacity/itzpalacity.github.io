const username = localStorage.getItem('username');

document.addEventListener('DOMContentLoaded', function() {
    if (username) {
        const selectedPlayers = JSON.parse(localStorage.getItem(`selections_${username}`)) || [];
        const playerList = document.getElementById('selected-players');

        if (selectedPlayers.length > 0) {
            selectedPlayers
