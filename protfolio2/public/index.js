function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("textarea").value,
  };
  const serviceId = "service_t9og1ao";
  const templateId = "template_qrn7lra";

  emailjs
    .send(serviceId, templateId, params)
    .then((res) => {
      document.getElementById("name").value = " ";
      document.getElementById("email").value = " ";
      document.getElementById("phone").value = " ";
      document.getElementById("textarea").value = " ";
      console.log(res);
      alert("message sent");
    })
    .catch((error) => console.log(error));
}
