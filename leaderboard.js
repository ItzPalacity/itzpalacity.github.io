// leaderboard.js

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const leaderboard = data.leaderboard;
    const leaderboardContainer = document.getElementById('leaderboard').getElementsByTagName('tbody')[0];

    // Clear existing leaderboard
    leaderboardContainer.innerHTML = '';

    // Populate the leaderboard
    leaderboard.forEach(player => {
      const playerRow = document.createElement('tr');
      
      // Create player name cell
      const playerCell = document.createElement('td');
      playerCell.textContent = player.name;
      playerRow.appendChild(playerCell);
      
      // Create points cell
      const pointsCell = document.createElement('td');
      pointsCell.textContent = player.points;
      playerRow.appendChild(pointsCell);
      
      // Add the player row to the table body
      leaderboardContainer.appendChild(playerRow);
    });
  })
  .catch(error => console.error('Error loading data:', error));


