// Sample data, in real life this could come from a server or JSON file
const players = [
    { name: "Racer 1", points: 120 },
    { name: "Racer 2", points: 150 },
    { name: "Racer 3", points: 100 },
];

// Insert data into the leaderboard
const leaderboardBody = document.querySelector("#leaderboard tbody");

players.forEach(player => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${player.name}</td><td>${player.points}</td>`;
    leaderboardBody.appendChild(row);
});
