const usernameDisplay = document.getElementById('usernameDisplay');
const logoutButton = document.getElementById('logoutButton');

// Load the logged-in user on page load
window.onload = () => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        usernameDisplay.innerText = `Logged in as: ${loggedInUser}`;
        logoutButton.style.display = 'inline'; // Show the logout button
        loadLeaderboard(); // Load leaderboard data
    } else {
        alert('You need to be registered to view the leaderboard.');
        window.location.href = 'index.html'; // Redirect to homepage
    }
};

logoutButton.addEventListener('click', () => {
    localStorage.removeItem('loggedInUser'); // Remove user from local storage
    location.reload(); // Refresh page
});

function loadLeaderboard() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const leaderboardBody = document.getElementById('leaderboardBody');
            leaderboardBody.innerHTML = ''; // Clear existing leaderboard data
            data.leaderboard.forEach(player => {
                const row = document.createElement('tr');
                row.innerHTML = `<td>${player.name}</td><td>${player.points}</td>`;
                leaderboardBody.appendChild(row);
            });
        });
}
