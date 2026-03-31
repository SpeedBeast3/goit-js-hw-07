const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const inputEl = () => {
  const valueEl = input.value.trim();
  const nameValue = valueEl === "" ? "Anonymous" : valueEl;
  output.textContent = nameValue;
};

input.addEventListener("input", inputEl);
