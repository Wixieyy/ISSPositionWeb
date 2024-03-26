obj = new Date()
// Set dot position
function setDotPosition(latitude, longitude) {
    const imageWidth = document.getElementById('earth-map').offsetWidth
    const imageHeight = document.getElementById('earth-map').offsetHeight

    const dot = document.getElementById('dot')
    dot.style.left = `${(longitude + 335) * (imageWidth / 360)}px`
    dot.style.top = `${(148 - latitude) * (imageHeight / 180)}px`

    document.getElementById("currentdate").textContent = `Current date & time: ${obj.getDate()}-${obj.getMonth()}-${obj.getFullYear()}`
}

// Fetch data from API
async function fetchData() {
    try {
        const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544')
        if (!response.ok) {
            throw new Error("Could not fetch data")
        }
        const data = await response.json()

        const latitude = parseFloat(data.latitude)
        const longitude = parseFloat(data.longitude)
        const altitude = parseFloat(data.altitude)
        const velocity = parseFloat(data.velocity)

        document.getElementById("latitude").textContent = `${Math.abs(latitude).toFixed(2)} ° ${latitude < 0 ? 'South' : 'North'}`
        document.getElementById("longitude").textContent = `${Math.abs(longitude).toFixed(2)} ° ${longitude < 0 ? 'West' : 'East'}`
        document.getElementById('altitude').textContent = `${altitude.toFixed(1)} km`
        document.getElementById('velocity').textContent = `${(velocity / 3.6).toFixed(1)} m/s`

        setDotPosition(latitude, longitude)
    } catch (error) {
        console.error(error)
    }
}

// Wait for the page content and images to fully load before executing the code
window.addEventListener('load', function() {
    // Fetch data initially
    fetchData()
    fetchAstronautData()

    // Set interval to fetch data periodically
    setInterval(fetchData, 3000) // Fetch data every 3 seconds
})


if (obj.getHours() > 18 || obj.getHours() < 7) {
    document.getElementById("earth-map").src = "img/Equirectangular-night.jpg"
}
else {
    document.getElementById("earth-map").src = "img/Equirectangular.jpg"
}

async function fetchAstronautData() {
    try {
        const response = await fetch('https://api.allorigins.win/get?url=http://api.open-notify.org/astros.json')
        if (!response.ok) {
            throw new Error("Could not fetch astronaut data")
        }
        const result = await response.json();
        const data = JSON.parse(result.contents);

        const astronauts = data.people.map(person => person.name);

        for (let x = 1; x <= astronauts.length; x++) {
            document.getElementById('astroinfo-title').textContent = `There are ${astronauts.length} people on the ISS`
            document.getElementById(`li${x}`).textContent = astronauts[x-1]
            document.getElementById(`li${x}`).style.display = 'flex'
        }
    }
    catch (error) {
        console.error(error)
    }
}

