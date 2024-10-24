document.addEventListener("DOMContentLoaded", function() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const leaderboardTable = document.getElementById('leaderboard').getElementsByTagName('tbody')[0];
            data.players.forEach(player => {
                const row = leaderboardTable.insertRow();
                const cell1 = row.insertCell(0);
                const cell2 = row.insertCell(1);
                cell1.textContent = player.name;
                cell2.textContent = player.points;
            });
        })
        .catch(error => console.error('Error fetching leaderboard data:', error));
});
