const form = document.querySelector("form");

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();
  const inputEmail = form.elements.email.value;
  const passwordInput = form.elements.password.value;
  if (inputEmail.trim() === "" || passwordInput.trim() === "") {
    alert("All form fields must be filled in");
    return;
  }

  console.log(`Login: ${inputEmail}, Password: ${passwordInput}`);
  form.reset();
}
