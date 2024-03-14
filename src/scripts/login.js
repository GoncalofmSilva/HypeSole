import pb from "./pocketbase.js";

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
    // Autenticar o usuário se a senha estiver correta
    const authData = await pb.collection('users').authWithPassword(email.value, password.value);
    
    // Após a autenticação, você pode acessar os dados de autenticação na authStore
    console.log(pb.authStore.isValid);
    console.log(pb.authStore.token);
    console.log(pb.authStore.model.id);

    window.location.href = "/"
    
    // Chama o callback com as informações do authStore
    callback(authStore);

    return authData;
  } catch (error) {
    console.error('Error during authentication:', error);
    throw error; // Você pode lidar com o erro de acordo com as necessidades do seu aplicativo
  }
}

document.getElementById("doLogin").addEventListener("click", () => {
  authenticateUser();
});