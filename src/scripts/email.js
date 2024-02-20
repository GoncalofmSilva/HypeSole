let email = document.getElementById("email");
let sendBtn = document.getElementById("send");

sendBtn.onclick = function () {
  emailjs.init("Ky4a554dMiXOgxi3a");

  const serviceId = "service_lj1mk4j";
  const templateId = "template_y1r47yh";

  if (email.value != "" /*mais tarde verificar se o email já tem newsletter*/) {
    emailjs.send(serviceId, templateId, {
      senderemail: `${email.value}`,
    });
    email.value = "";
  }
  else{
    email.value = "";
  }
};
