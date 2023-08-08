document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the values from input fields
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Replace the following lines with your actual login validation logic
  if (username === 'exampleuser' && password === 'examplepass') {
    alert('Login successful!'); // Replace this with actual login code
  } else {
    alert('Invalid username or password'); // Replace this with actual login code
  }
});

// Show the signup form and hide the login form when the "Sign Up" button is clicked
document.getElementById('signup-btn').addEventListener('click', function() {
  document.querySelector('.login-container').style.display = 'none';
  document.querySelector('.signup-container').style.display = 'block';
});


document.getElementById('redirect-Btn').addEventListener('click', function() {
    window.location.href = "homepage.html";
  });

// Handle the signup form submission
document.getElementById('signup-form').addEventListener('submit', function(event) {
  //event.preventDefault(); // Prevent form submission


  // Get the values from input fields
  const email = document.getElementById('email').value;
  const signupPassword = document.getElementById('signup-password').value;
  const nickname = document.getElementById('nickname').value;
  const dob = document.getElementById('dob').value;
  const gender = document.getElementById('gender').value;

  // You can handle the signup process here, for example, by sending the data to a server using AJAX.

  // For this example, we'll just display the entered data in an alert:
  //alert(`Thank you for signing up!\n\nEmail: ${email}\nPassword: ${signupPassword}\nUsername: ${nickname}\nDate of Birth: ${dob}\nGender: ${gender}`);

  // Redirect to the homepage
  //window.location.replace("homepage.html"); // Replace "homepage.html" with the actual file name of your homepage

  
  // Clear the input fields after successful signup
  document.getElementById('email').value = '';
  document.getElementById('signup-password').value = '';
  document.getElementById('nickname').value = '';
  document.getElementById('dob').value = '';
  document.getElementById('gender').selectedIndex = 0;


//   function redirectToHomePage() {
//   // Perform the redirection to homepage.html
//   window.location.href = "homepage.html";
// }

});


// Handle the "Cancel" button click to go back to the login form
document.getElementById('cancel-btn').addEventListener('click', function() {
  document.querySelector('.login-container').style.display = 'block';
  document.querySelector('.signup-container').style.display = 'none';
});

