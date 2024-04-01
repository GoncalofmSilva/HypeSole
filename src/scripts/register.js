import db from "../scripts/database.js";

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

document.getElementById("doRegist").addEventListener("click", () => {
  createUser();
});

async function createUser() {
  // example create data
  const data = {
    email: email.value,
    emailVisibility: true,
    password: password.value,
    passwordConfirm: confPassword.value,
    name: name.value,
    lastName: surname.value,
  };

  event.preventDefault();

  if (name.value.trim() === "" || surname.value.trim() === "" || email.value.trim() === "" || password.value.trim() === "" || confPassword.value.trim() === "") {
    alert("Please fill in all fields.");
    return;
  }

  if (confPassword.value !== password.value) {
    alert("Passwords do not match.");
    confPassword.value = "";
    return;
  }

  try {
    // Create the user if the email is not in use
    const record = await pb.collection("users").create(data);
    console.log("User created:", record);

    // Optionally, you can redirect the user or show a success message.
  } catch (error) {
    console.error("Error creating user:", error);
    // Optionally, you can show an error message to the user.
  }
}