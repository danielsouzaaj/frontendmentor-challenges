const form = document.querySelector(".form-container");
const input = document.querySelector('[type="email"]');
const button = document.querySelector(".btn");

form.addEventListener("submit", checkEmail);
input.addEventListener("click", removeInvalidMsg);

function checkEmail(event) {
  event.preventDefault();
  if (!validateEmail(input.value) && !input.classList.contains("invalid")) {
    input.classList.add("invalid");
    form.insertBefore(
      invalidMsg("Please provide a valid email address"),
      button
    );
  }
}

function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

function removeInvalidMsg() {
  if (input.classList.contains("invalid")) {
    const invalidMsg = document.querySelector(".invalid-text");
    input.classList.remove("invalid");
    invalidMsg.remove();
  }
}

function invalidMsg(msg) {
  const pElement = document.createElement("p");
  pElement.classList.add("invalid-text");
  pElement.textContent = msg;

  return pElement;
}
