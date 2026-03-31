const form = document.querySelector(".login-form");

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();
  const inputEmail = form.elements.email.value.trim();
  const passwordInput = form.elements.password.value.trim();
  if (inputEmail === "" || passwordInput === "") {
    alert("All form fields must be filled in");
    return;
  }

  const formData = {
    email: inputEmail,
    password: passwordInput,
  };
  console.log(formData);
  form.reset();
}
