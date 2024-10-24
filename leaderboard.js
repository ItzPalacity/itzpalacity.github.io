const leaderboardTableBody = document.getElementById('leaderboardTable').getElementsByTagName('tbody')[0];

// Function to fetch leaderboard data
async function fetchLeaderboard() {
    const response = await fetch('data.json');
    const data = await response.json();
    return data.leaderboard;
}

// Function to populate the leaderboard table
async function populateLeaderboard() {
    const players = await fetchLeaderboard();
    players.forEach(player => {
        const row = leaderboardTableBody.insertRow();
        const playerCell = row.insertCell(0);
        const pointsCell = row.insertCell(1);
        playerCell.textContent = player.name;
        pointsCell.textContent = player.points;
    });
}

populateLeaderboard();
