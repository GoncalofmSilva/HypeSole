// Get the password input and toggle button elements
let password = document.getElementById("password");
let togglePassword = document.getElementById("togglePassword");

// Function to toggle password visibility
togglePassword.onclick = function () {
    if (password.type === "password") {
        password.type = "text";
        togglePassword.classList.remove("fa-eye-slash");
        togglePassword.classList.add("fa-eye");
    } else {
        password.type = "password";
        togglePassword.classList.remove("fa-eye");
        togglePassword.classList.add("fa-eye-slash");
    }
};

// doLogin
let email = document.getElementById("email")
let doLogin = document.getElementById("doLogin")

let currentEmail = "hypesole@gmail.com" // "Select email from users"
let currentPassword = "hypesole" // "Select password from users"

doLogin.onclick = function(event) {
    event.preventDefault();
    if(email.value == currentEmail && password.value == currentPassword){
        window.location.href = "/"
    }
    else {
        alert("Invalid username or password. Please try again.");
        // Clear input fields or provide feedback to the user
        email.value = ""
        password.value = ""
      }
};