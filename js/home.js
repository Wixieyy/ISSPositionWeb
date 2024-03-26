obj = new Date();
// Set dot position
function setDotPosition(latitude, longitude) {
    const imageWidth = document.getElementById('earth-map').offsetWidth;
    const imageHeight = document.getElementById('earth-map').offsetHeight;

    const dot = document.getElementById('dot');
    dot.style.left = `${(longitude + 335) * (imageWidth / 360)}px`;
    dot.style.top = `${(148 - latitude) * (imageHeight / 180)}px`;

    document.getElementById("currentdate").textContent = `Current date & time: ${obj.getDate()}-${obj.getMonth()}-${obj.getFullYear()}`
}

// Fetch data from API
async function fetchData() {
    try {
        const response = await fetch('http://api.open-notify.org/iss-now.json');
        if (!response.ok) {
            throw new Error("Could not fetch data");
        }
        const data = await response.json();

        const latitude = parseFloat(data.iss_position.latitude);
        const longitude = parseFloat(data.iss_position.longitude);

        document.getElementById("latitude").textContent = `${Math.abs(latitude).toFixed(2)} ° ${latitude < 0 ? 'South' : 'North'}`;
        document.getElementById("longitude").textContent = `${Math.abs(longitude).toFixed(2)} ° ${longitude < 0 ? 'West' : 'East'}`;

        setDotPosition(latitude, longitude);
    } catch (error) {
        console.error(error);
    }
}

// Wait for the page content and images to fully load before executing the code
window.addEventListener('load', function() {
    // Fetch data initially
    fetchData();

    // Set interval to fetch data periodically
    setInterval(fetchData, 3000); // Fetch data every 3 seconds
});


if (obj.getHours() > 18 || obj.getHours() < 7) {
    document.getElementById("earth-map").src = "img/Equirectangular-night.jpg"
}
else {
    document.getElementById("earth-map").src = "img/Equirectangular.jpg"
}
