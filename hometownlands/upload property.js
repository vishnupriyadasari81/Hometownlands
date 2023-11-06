function submitForm() {
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
  
    // You can perform additional validation here.
  
    // You can perform additional actions, such as sending data to a server or storing in local storage.
  
    console.log('Username: ', username);
    console.log('Email: ', email);
    console.log('Password: ', password);


  document.getElementById('form').addEventListener('submit', function (e) {
      e.preventDefault();
      alert('congrats!!!you have been successfully login!'); // Display an alert message

      // Redirect to the main page (change the URL to your main page)
      window.location.href = 'signup.html';
  });
}