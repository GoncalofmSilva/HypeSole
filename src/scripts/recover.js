import db from "../scripts/database.js";

let email = document.getElementById("email")
async function recoverPassword() {
  await pb.collection("users").requestPasswordReset(`${email.value}`);
}

document.getElementById("doRecover").addEventListener("click", () => {
    recoverPassword();
});