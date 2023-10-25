
document.addEventListener("DOMContentLoaded", function () {

const alertOverlay = document.getElementById("alert-overlay");
  const alertBox = document.getElementById("alert-box");
  const alertMessage = document.getElementById("alert-message");
  const closeButton = document.getElementById("close-button");
  const form = document.querySelector("form");
  const phoneInput = form.querySelector('input[type="tel"]');

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
    event.preventDefault(); 

   
    showOverlay();

    
    setTimeout(function () {
  
      hideOverlay();
      
      showAlert("Message Sent!");
    }, 2000);
  });


// Add a click event listener to the "OK" button in the alert
closeButton.addEventListener("click", function () {
    hideAlert(); 
    
    location.reload(); 
});
// Scroll to the top of the page when it reloads

window.addEventListener("DOMContentLoaded", function () {
    window.scrollTo(0, 0);
});


$(document).ready(function() {

  var currentUrl = window.location.href;

k
  $(".navbar-nav .nav-link").each(function() {
    var linkUrl = $(this).attr("href");

    
    if (currentUrl.indexOf(linkUrl) !== -1) {
      
      $(this).addClass("active");
    }
  });
  
  if (currentUrl.endsWith("index.html") || currentUrl.endsWith("/")) {
    $(".navbar-nav .nav-link[href='index.html']").addClass("active");
  }
});



//phone
phoneInput.addEventListener("input", function () {
 
    this.value = this.value.replace(/\D/g, "");
  });


});

//send btn
const sendButton = document.getElementById("send-button");
  sendButton.addEventListener("click", function () {
   
    form.submit();
  });
