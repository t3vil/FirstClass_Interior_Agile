
// Function to update the progress bar
function updateProgressBar() {
    const progressBar = document.getElementById("progress-bar");
    let width = 0;

    
    const interval = setInterval(() => {
      if (width >= 100) {
        clearInterval(interval); 
        hideProgressBar();
      } else {
        width++;
        progressBar.style.width = width + "%";
      }
    }, 15); 
  }

  // Function to hide the progress bar and show the website content
  function hideProgressBar() {
    const progressContainer = document.getElementById("progress-container");
    progressContainer.style.display = "none";
  }

  updateProgressBar();

 //nav
  $(document).ready(function() {
  
    var currentUrl = window.location.href;
  
 
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

  