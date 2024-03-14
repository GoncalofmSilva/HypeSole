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

/*// Função para autenticar o usuário
async function authenticateUser(usernameOrEmail, password) {
  try {
    // Verificar se o usuário existe com o nome de usuário ou email fornecido
    const existingUsers = await pb.collection('users').getList(1, 1, { filter: `email == "${email}"` });
    if (existingUsers.length === 0) {
      throw new Error('User not found.');
    }

    // Comparar a senha fornecida com a senha armazenada no banco de dados
    const user = existingUsers[0];
    if (user.password !== password) {
      throw new Error('Invalid password.');
    }

    // Autenticar o usuário se a senha estiver correta
    const authData = await pb.collection('users').authWithPassword(usernameOrEmail, password);
    
    // Após a autenticação, você pode acessar os dados de autenticação na authStore
    console.log(pb.authStore.isValid);
    console.log(pb.authStore.token);
    console.log(pb.authStore.model.id);

    return authData;
  } catch (error) {
    console.error('Error during authentication:', error);
    throw error; // Você pode lidar com o erro de acordo com as necessidades do seu aplicativo
  }
}
 */
