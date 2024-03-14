import PocketBase from "pocketbase";
const pb = new PocketBase("http://127.0.0.1:8090");

let email = document.getElementById("email")
async function recoverPassword() {
  await pb.collection("users").requestPasswordReset(`${email.value}`);
}

document.getElementById("doRecover").addEventListener("click", () => {
    recoverPassword();
});