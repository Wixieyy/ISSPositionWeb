document.getElementById("proceed-link").addEventListener("click", function(event) {
    // Prevent the default behavior of the hyperlink
    event.preventDefault();

    // Add fade-out class to trigger the animation
    document.querySelector('.centerbox').classList.add('fade-out');

    // Delay before navigating to the URL
    setTimeout(function() {
        // Get the URL from the href attribute
        var url = document.getElementById("proceed-link").getAttribute("href");

        // Navigate to the URL
        window.location.href = url;
    }, 1000); // Adjust the delay time (in milliseconds) to match the duration of the animation
});
