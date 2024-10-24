// leaderboard.js

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const leaderboard = data.leaderboard;
    const leaderboardContainer = document.getElementById('leaderboard');

    // Clear existing leaderboard
    leaderboardContainer.innerHTML = '';

    // Populate the leaderboard
    leaderboard.forEach(player => {
      const playerElement = document.createElement('div');
      playerElement.textContent = `${player.name}: ${player.points} points`;
      leaderboardContainer.appendChild(playerElement);
    });
  })
  .catch(error => console.error('Error loading data:', error));

