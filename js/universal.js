document.getElementById("apidocslink").addEventListener("click", function(event) {
    // Prevent the default behavior of the hyperlink
    event.preventDefault();

    // Add fade-out class to trigger the animation
    document.querySelector('.center-box').classList.add('fade-out');
    document.querySelector('.navbar').classList.add('fade-out');

    // Delay before navigating to the URL
    setTimeout(function() {
        // Get the URL from the href attribute
        var url = document.getElementById("apidocslink").getAttribute("href");

        // Navigate to the URL
        window.location.href = url;
    }, 250); // Adjust the delay time (in milliseconds) to match the duration of the animation
});

document.getElementById("sourcecodelink").addEventListener("click", function(event) {
    // Prevent the default behavior of the hyperlink
    event.preventDefault();

    // Add fade-out class to trigger the animation
    document.querySelector('.center-box').classList.add('fade-out');
    document.querySelector('.navbar').classList.add('fade-out');

    // Delay before navigating to the URL
    setTimeout(function() {
        // Get the URL from the href attribute
        var url = document.getElementById("sourcecodelink").getAttribute("href");

        // Navigate to the URL
        window.location.href = url;
    }, 250); // Adjust the delay time (in milliseconds) to match the duration of the animation
});

// remove faded out effect if person uses go back button to go back to same page
if (document.querySelector('.center-box').classList.contains('fade-out')) {
    document.querySelector('.center-box').classList.remove('fade-out');
    document.querySelector('.navbar').classList.remove('fade-out');
}