const leaderboardTable = document.getElementById('leaderboardTable').getElementsByTagName('tbody')[0];

async function fetchLeaderboard() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        data.players.forEach(player => {
            const row = leaderboardTable.insertRow();
            row.insertCell(0).innerText = player.name;
            row.insertCell(1).innerText = player.points;
        });
    } catch (error) {
        console.error('Error fetching leaderboard data:', error);
    }
}

fetchLeaderboard();
