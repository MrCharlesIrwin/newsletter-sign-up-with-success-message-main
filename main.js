const form = document.querySelector(".form");
const error = document.querySelector(".form__error");
const input = document.querySelector(".form__input");
const main = document.querySelector(".main");
const btn = document.querySelector(".dismissBtn");
const successMessage = document.querySelector(".successMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let pattern =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (input.value.match(pattern)) {
    error.classList.remove("display");
    input.classList.remove("background");
    main.classList.add("hide");
    successMessage.classList.add("display");
    this.removeEventListener("submit", s());
  }
  if (!input.value.match(pattern)) {
    error.classList.add("display");
    input.classList.add("background");
  }
});
