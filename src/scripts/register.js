// Get the password input and toggle button elements
let password = document.getElementById("password");
let togglePassword = document.getElementById("togglePassword");
let toggleConfPassword = document.getElementById("toggleConfPassword");

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

toggleConfPassword.onclick = function () {
  if (confPassword.type == "password") {
    confPassword.type = "text";
    toggleConfPassword.classList.remove("fa-eye-slash");
    toggleConfPassword.classList.add("fa-eye");
  } else {
    confPassword.type = "password";
    toggleConfPassword.classList.remove("fa-eye");
    toggleConfPassword.classList.add("fa-eye-slash");
  }
};

// doRegist
let name = document.getElementById("name");
let surname = document.getElementById("surname");
let email = document.getElementById("email");
let confPassword = document.getElementById("confPassword");
let doRegist = document.getElementById("doRegist");
let popup = document.getElementById("popup");

doRegist.onclick = function (event) {
  emailjs.init("Ky4a554dMiXOgxi3a");

  const serviceId = "service_yb9i05g";
  const templateId = "template_whnlxic";

  event.preventDefault();
  if (name.value !== "" && surname.value !== "" && email.value !== "" && password.value !== "" && confPassword.value !== "") {
    if (confPassword.value === password.value) {
      emailjs.send(serviceId, templateId, {
        senderemail: `${email.value}`,
      });
      popup.classList.add("open-popup");
    } else {
      alert("Passwords are different.");
      // Clear input fields or provide feedback to the user
      confPassword.value = "";
    }
  }
};

// doClosePopup
let closePopup = document.getElementById("closePopup");

closePopup.onclick = function () {
  popup.classList.remove("open-popup");
  window.location.href = "/";
};
