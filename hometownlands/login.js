function submitForm() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
  
    // You can perform additional validation here.
  
    // Check if the username and password match your predefined credentials.
    // Example:
    if (username === 'your_username' && password === 'your_password') {
      alert('congrats!!!you have been successfully login!'); // Display an alert message

      // Redirect to the main page (change the URL to your main page)
      window.location.href = 'index.html';
  ;
} else {
  alert('First signup by given link below');
  window.location.href = 'index.html';
}
}