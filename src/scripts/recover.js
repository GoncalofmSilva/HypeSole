import pb from "./pocketbase.js";

let email = document.getElementById("email")
async function recoverPassword() {
  await pb.collection("users").requestPasswordReset(`${email.value}`);
}

document.getElementById("doRecover").addEventListener("click", () => {
    recoverPassword();
});