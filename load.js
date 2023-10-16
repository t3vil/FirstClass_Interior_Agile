
// Function to update the progress bar
function updateProgressBar() {
    const progressBar = document.getElementById("progress-bar");
    let width = 0;

    // Increment the progress bar width at intervals (adjust as needed)
    const interval = setInterval(() => {
      if (width >= 100) {
        clearInterval(interval); // Loading complete, stop the interval
        hideProgressBar();
      } else {
        width++;
        progressBar.style.width = width + "%";
      }
    }, 15); // Adjust the interval time (in milliseconds) for desired loading speed
  }

  // Function to hide the progress bar and show the website content
  function hideProgressBar() {
    const progressContainer = document.getElementById("progress-container");
    progressContainer.style.display = "none";
  }

  // Call the function to update the progress bar
  updateProgressBar();