// Get references to the alert overlay and related elements
const alertOverlay = document.getElementById("alert-overlay");
const alertBox = document.getElementById("alert-box");
const alertMessage = document.getElementById("alert-message");
const closeButton = document.getElementById("close-button");
const form = document.querySelector("form"); // Reference to the form element

// Function to show the alert overlay
function showAlert(message) {
    alertMessage.textContent = message;
    alertOverlay.style.display = "block";
}

// Function to hide the alert overlay
function hideAlert() {
    alertOverlay.style.display = "none";
}

// Function to show the form overlay
function showOverlay() {
    alertOverlay.style.display = "block";
}

// Function to hide the form overlay
function hideOverlay() {
    alertOverlay.style.display = "none";
}

// Add a submit event listener to the form
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting (you can submit it via AJAX if needed)

    // Show the overlay
    showOverlay();

    // Simulate sending the form data (you can replace this with your AJAX code)
    setTimeout(function () {
        // Hide the form overlay
        hideOverlay();

        // Show the message sent alert
        showAlert("Message Sent!");
    }, 2000); // Simulated delay, replace with your actual logic
});

// Add a click event listener to the "OK" button in the alert
closeButton.addEventListener("click", function () {
    hideAlert(); // Hide the alert overlay
    // Optionally, you can add more logic here or simply reload the page
    location.reload(); // Reload the page
});
// Scroll to the top of the page when it reloads
// Scroll to the top of the page when it loads
window.addEventListener("DOMContentLoaded", function () {
    window.scrollTo(0, 0);
});
