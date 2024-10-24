document.addEventListener('DOMContentLoaded', () => {
    const leaderboardBody = document.getElementById('leaderboard-body');

    // Fetch player data from JSON
    fetch('data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const players = data.players;

            // Sort players by points in descending order
            players.sort((a, b) => b.points - a.points);

            // Clear existing rows
            leaderboardBody.innerHTML = '';

            // Populate the leaderboard table
            players.forEach(player => {
                const row = document.createElement('tr');
                const nameCell = document.createElement('td');
                const pointsCell = document.createElement('td');

                nameCell.textContent = player.name;
                pointsCell.textContent = player.points;

                row.appendChild(nameCell);
                row.appendChild(pointsCell);
                leaderboardBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching leaderboard data:', error));
});



