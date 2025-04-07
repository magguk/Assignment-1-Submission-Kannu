// ---- Exercise 1
document.getElementById("fetchPostBtn").addEventListener("click", async () => {
    const postsResults = document.getElementById('postsResults');
    postsResults.innerHTML = "<p>Loading...</p>"; // Optional loading message

    try {
        const response = await fetch("https://raw.githubusercontent.com/KoreanThinker/billboard-json/main/billboard-hot-100/recent.json");
        if (!response.ok) throw new Error("Failed to fetch Billboard Hot 100 data");

        const data = await response.json();
        const songs = data.data; // Access the array of songs

        // Display first 5 songs
        postsResults.innerHTML = songs.slice(0, 5).map(song =>
            `<h3>${song.rank}. ${song.name} by ${song.artist}</h3>`
        ).join("");

    } catch (error) {
        postsResults.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    }
});


// ---- Exercise 2
document.getElementById('weatherBtn').addEventListener("click", async () => {
    const location = document.getElementById('location').value;
    const date = document.getElementById('weatherDate').value;
    const weatherResults = document.getElementById('weatherResults');

    if (!location || !date) {
        weatherResults.innerHTML = "<p>Please enter both city and date.</p>";
        return;
    }

    const apiKey = "A4SN4P53L4P2YSR4KAE3U5UJX"; // Key from the weather website
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${date}?key=${apiKey}&unitGroup=metric`;

    weatherResults.innerHTML = "<p>Loading...</p>";

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch weather");

        const data = await response.json();
        const day = data.days[0];

        weatherResults.innerHTML = `
            <h3>Weather for ${location} on ${date}</h3>
            <p>Temperature: ${day.temp}°C</p>
            <p>Conditions: ${day.conditions}</p>
            <p>Humidity: ${day.humidity}%</p>
        `;
    } catch (error) {
        weatherResults.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    }
});
