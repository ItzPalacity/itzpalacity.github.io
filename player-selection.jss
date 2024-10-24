// Player data - could be dynamic
const players = ["Racer 1", "Racer 2", "Racer 3", "Racer 4", "Racer 5"];

const playerSelectors = [
    document.getElementById("player1"),
    document.getElementById("player2"),
    document.getElementById("player3")
];

// Populate select boxes with player options
playerSelectors.forEach(select => {
    players.forEach(player => {
        const option = document.createElement("option");
        option.value = player;
        option.textContent = player;
        select.appendChild(option);
    });
});

document.getElementById("player-selection-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const selectedPlayers = {
        player1: document.getElementById("player1").value,
        player2: document.getElementById("player2").value,
        player3: document.getElementById("player3").value
    };

    localStorage.setItem("selectedPlayers", JSON.stringify(selectedPlayers));
    alert("Your players are locked in for the week!");
});
