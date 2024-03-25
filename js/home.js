document.getElementById("aboutuslink").addEventListener("click", function(event) {
    // Prevent the default behavior of the hyperlink
    event.preventDefault();

    // Add fade-out class to trigger the animation
    document.querySelector('.center-box').classList.add('fade-out');

    // Delay before navigating to the URL
    setTimeout(function () {
        // Get the URL from the href attribute
        var url = document.getElementById("aboutuslink").getAttribute("href");

        // Navigate to the URL
        window.location.href = url;
    }, 250); // Adjust the delay time (in milliseconds) to match the duration of the animation
})

for (let x = 0; x < 9999; x++) {
    setTimeout(fetchData, 3000 * x)
}
async function fetchData() {
    try {
        const longitudeText = document.getElementById("longitude")
        const latitudeText = document.getElementById("latitude")
        const response = await fetch('http://api.open-notify.org/iss-now.json')

        if (!response.ok) {
            throw new error("could not fetch")
        }
        const data = await response.json()
        if (data.iss_position.longitude < 180) {
            longitudeText.textContent = Math.abs(Number(data.iss_position.longitude).toFixed(2)) + " ° East"
        } else {
            longitudeText.textContent = Number(data.iss_position.longitude).toFixed(2) + " ° West"
        }
        if (data.iss_position.latitude < 180) {
            latitudeText.textContent = Math.abs(Number(data.iss_position.latitude).toFixed(2)) + " ° North"
        } else {
            latitudeText.textContent = Number(data.iss_position.latitude).toFixed(2) + " ° South"
        }
    }
    catch (error) {
        console.error(error)
    }
}
