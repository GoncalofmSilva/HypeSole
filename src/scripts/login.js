import db from "../scripts/database.js";

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

// Função para autenticar o usuário
async function authenticateUser(callback) {
  try {
    const result = await db.query('Select * from users');
    console.log(result)
    // Faça algo com o resultado, por exemplo, chame a função de retorno de chamada
  } catch (error) {
    console.error('Erro ao autenticar o usuário:', error);
  }
}

document.getElementById("doLogin").addEventListener("click", () => {
  authenticateUser();
});