const btnSubmit = document.querySelector(".btnSubmit");
const inputs = document.querySelectorAll("input");

btnSubmit.addEventListener("click", handleFormSubmit);
inputs.forEach((input) => {
  input.addEventListener("change", handleChangeInput);
});

function handleFormSubmit(e) {
  e.preventDefault();

  inputs.forEach((input) => {
    if (!input.checkValidity()) {
      input.classList.add("errorActive");
      input.nextElementSibling.classList.add("errorActive");
      input.nextElementSibling.nextElementSibling.classList.add("errorActive");
    } else {
      input.classList.remove("errorActive");
      input.nextElementSibling.classList.remove("errorActive");
      input.nextElementSibling.nextElementSibling.classList.remove(
        "errorActive",
      );
      input.value = "";
    }
  });

  if (inputs[2].classList.contains("errorActive")) {
    inputs[2].placeholder = "email@example/com";
  }
}

function handleChangeInput(e) {
  if (e.target.checkValidity()) {
    e.target.classList.remove("errorActive");
    e.target.nextElementSibling.classList.remove("errorActive");
    e.target.nextElementSibling.nextElementSibling.classList.remove(
      "errorActive",
    );
  }
}
