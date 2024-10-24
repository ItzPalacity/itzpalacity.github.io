// player-selection.js

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const players = data.players;
    const playerSelectionContainer = document.getElementById('player-selection');
    
    // Clear existing selection options
    playerSelectionContainer.innerHTML = '';

    // Create a dropdown for selecting players
    const selectElement = document.createElement('select');
    selectElement.multiple = true; // Allow multiple selections
    playerSelectionContainer.appendChild(selectElement);

    players.forEach(player => {
      const option = document.createElement('option');
      option.value = player;
      option.textContent = player;
      selectElement.appendChild(option);
    });

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Lock Selection';
    playerSelectionContainer.appendChild(submitButton);

    submitButton.addEventListener('click', () => {
      const selectedPlayers = Array.from(selectElement.selectedOptions).map(option => option.value);
      if (selectedPlayers.length === 3) {
        alert(`You have locked in: ${selectedPlayers.join(', ')}`);
        // Logic to store locked players can be added here
      } else {
        alert('Please select exactly 3 players.');
      }
    });
  })
  .catch(error => console.error('Error loading data:', error));
