document.addEventListener("DOMContentLoaded", function () {
  // Show the pop-up after 5 seconds
  console.log("success");
  setTimeout(function () {
    document.querySelector(".cookiePopup").classList.add("show");
  }, 1000);



  document.getElementById("reject-btn").addEventListener("click", function () {
    // Set your logic to handle cookie rejection here
    console.log("All cookies rejected.");
    closePopup();
  });

  function closePopup() {
    document.querySelector('.cookiePopup').style.display = "none";
  }

});


var selectedTheme = localStorage.getItem('selectedTheme');

// Set background image based on the chosen theme
if (selectedTheme === 'dark') {
  document.body.style.backgroundImage = 'url("dark.avif")';
} else if (selectedTheme === 'retro') {
  document.body.style.backgroundImage = 'url("retro.avif")';
} else if (selectedTheme === 'country') {
  document.body.style.backgroundImage = 'url("country.jpg")';
} else if (selectedTheme === 'light') {
  document.body.style.backgroundImage = 'url("light.webp")';
}


document.addEventListener("DOMContentLoaded", function () {
  var countdownSeconds = 5; // Set the countdown time in seconds
  
  // Show the pop-up after a delay
  setTimeout(function () {
    document.querySelector(".cookiePopup").classList.add("show");
    startCountdown(countdownSeconds);
  }, 200);

  // Function to start the countdown timer
  function startCountdown(seconds) {
    var countdownDisplay = document.querySelector('.countdown');
    var interval = setInterval(function () {
      countdownDisplay.textContent = 'Closes in ' + seconds ;
      seconds--;
      if (seconds < 0) {
        clearInterval(interval);
        document.querySelector('.cookiePopup').style.display = "none";
      }
    }, 1000); // Update every second
  }

  // ... (rest of your code)

});
