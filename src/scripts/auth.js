import pb from "./pocketbase.js";
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

/* Seria ent 
let isLoggedIn = false;
const inactivityTimeout = 10 * 60 * 1000; // 10 minutos
let lastActivityTime = Date.now();

function checkLoginStatus() {
  // Lógica para verificar o estado de login do usuário
}

function checkActivity() {
  // Lógica para verificar a atividade do usuário
}

function logout() {
  // Lógica para realizar o logout do usuário
}

document.addEventListener("mousemove", function() {
  // Atualizar o tempo da última atividade quando houver interação do usuário
});

setInterval(checkActivity, 1000);

*/
