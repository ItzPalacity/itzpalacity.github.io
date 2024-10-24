const leaderboardTableBody = document.querySelector('#leaderboard-table tbody');

function loadLeaderboard() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // Sort players by points
            data.players.sort((a, b) => b.points - a.points);

            // Clear the table body
            leaderboardTableBody.innerHTML = '';

            // Populate the table with player data
            data.players.forEach(player => {
                const row = document.createElement('tr');
                const nameCell = document.createElement('td');
                const pointsCell = document.createElement('td');

                nameCell.textContent = player.name;
                pointsCell.textContent = player.points;

                row.appendChild(nameCell);
                row.appendChild(pointsCell);
                leaderboardTableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error fetching leaderboard data:', error);
        });
}

loadLeaderboard();
