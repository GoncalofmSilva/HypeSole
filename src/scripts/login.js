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

/*
<!-- HTML -->
<div id="icon">Ícone</div>
<div id="topics" style="display: none;">
  <ul>
    <li>Perfil</li>
    <li>Logout</li>
  </ul>
</div>

Função para mudar o icon para a lista

// JavaScript
let isLoggedIn = pb.authStore.isValid;

// Função para verificar o estado de login a cada intervalo de tempo
function checkLoginStatus() {
  isLoggedIn = pb.authStore.isValid;
  updateUI();
}

// Chamada inicial para verificar o estado de login
checkLoginStatus();

// Configuração do intervalo de verificação do estado de login (por exemplo, a cada 10 minutos)
setInterval(checkLoginStatus, 10 * 60 * 1000); // Verifica a cada 10 minutos

// Função para atualizar a interface com base no estado de login
function updateUI() {
  const iconElement = document.getElementById("icon");
  const topicsElement = document.getElementById("topics");

  if (isLoggedIn) {
    iconElement.style.display = "none";
    topicsElement.style.display = "block";
  } else {
    iconElement.style.display = "block";
    topicsElement.style.display = "none";
  }
}


// Logout automatico

let isLoggedIn = pb.authStore.isValid;

// Definir tempo limite de inatividade (por exemplo, 10 minutos)
const inactivityTimeout = 10 * 60 * 1000; // 10 minutos
let lastActivityTime = Date.now();

// Função para verificar a atividade do usuário
function checkActivity() {
  const currentTime = Date.now();
  const elapsedTime = currentTime - lastActivityTime;

  if (elapsedTime >= inactivityTimeout) {
    logout();
  }
}

// Função para realizar logout
function logout() {
  // Limpar o token de autenticação e quaisquer outros dados de sessão
  pb.authStore.clear();
  // Atualizar a interface do usuário
  updateUI();
}

// Atualizar o tempo da última atividade sempre que houver interação do usuário
document.addEventListener("mousemove", function() {
  lastActivityTime = Date.now();
});

// Verificar a atividade do usuário a cada segundo
setInterval(checkActivity, 1000);
*/
