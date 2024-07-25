const form = document.querySelector(".form-container");
const formControl = document.querySelectorAll(".form-control");
const campos = document.querySelectorAll("input");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  campos.forEach((item, index) => {
    if (item.value === "") {
      item.setCustomValidity(`${item.placeholder} cannot be empty`);
    }

    if (
      item.type === "email" &&
      item.value !== "" &&
      !validateEmail(item.value)
    ) {
      item.setCustomValidity("Looks like this is not an email");
    }

    if (item.validationMessage && !item.classList.contains("erro")) {
      formControl[index].insertBefore(addError(item.validationMessage), item);
      item.classList.add("erro");
    }
  });
});

campos.forEach((item, index) => {
  item.addEventListener("focus", () => {
    if (item.classList.contains("erro")) {
      item.classList.remove("erro");
      formControl[index].querySelector(".text-erro").remove();
    }
  });
});

function addError(text) {
  let textElement = document.createElement("p");
  textElement.classList.add("text-erro");
  textElement.innerText = text;

  return textElement;
}

function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}
