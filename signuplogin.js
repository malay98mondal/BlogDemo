document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;

    if (password !== confirmPassword) {
        alert('Password and confirm password do not match');
    } else {
        // Submit the form
        alert('Sign up successful');
    }
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Login the user
    alert('Login successful');
});

function signUpWithGoogle() {
  // Use the Google API to authenticate the user
}

function signUpWithFacebook() {
  // Use the Facebook API to authenticate the user
}

function loginWithGoogle() {
  // Use the Google API to authenticate the user
}

function loginWithFacebook() {
  // Use the Facebook API to authenticate the user
}
