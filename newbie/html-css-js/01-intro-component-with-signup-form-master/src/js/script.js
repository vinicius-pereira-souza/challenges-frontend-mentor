const btnSubmit = document.querySelector(".btnSubmit");
const inputs = document.querySelectorAll("input");
const messSuccess = document.querySelector(".succMessage");

inputs.forEach((input) => {
  input.addEventListener("change", handleChangeInput);
});

btnSubmit.addEventListener("click", handleClickSubmitForm);

// valida os input apartir do click no botão
function handleClickSubmitForm(e) {
  e.preventDefault();

  inputs.forEach((input) => {
    if (!input.checkValidity()) {
      activeErrorMessage(input);
    } else {
      removeErrorMessage(input);
      messSuccess.classList.add("showSuccessSubmit");
      input.value = "";
      setInterval(() => {
        messSuccess.classList.remove("showSuccessSubmit");
      }, 2000);
    }
  });
}

function handleChangeInput(e) {
  const validationEmail = /[\w.-]+@[\w-]+\.[\w-.]+/gi;

  // validação para nome e sobrenome
  if (e.target.id === "nome" || e.target.id === "sobrenome") {
    e.target.value = clearInputName(e.target);

    if (e.target.classList.contains("errorActive")) {
      removeErrorMessage(e.target);
    }
  }

  // validação para email
  if (e.target.id === "emailInput") {
    if (!validationEmail.test(e.target.value)) {
      activeErrorMessage(e.target);
    } else {
      removeErrorMessage(e.target);
    }
  }

  // validação para senha
  if (e.target.id === "senha") {
    if (!e.target.checkValidity()) {
      activeErrorMessage(e.target);
    } else {
      removeErrorMessage(e.target);
    }
  }
}

// remove digitos, . e espaços dos input do tipo texto
function clearInputName(input) {
  const clearInputText = /[\d.-\s]/g;
  const cleanValue = input.value.replace(clearInputText, "");

  return cleanValue;
}

// remove messagem de erro caso ela tenha ativa
function removeErrorMessage(input) {
  input.classList.remove("errorActive");
  input.nextElementSibling.classList.remove("errorActive");
  input.nextElementSibling.nextElementSibling.classList.remove("errorActive");
}

// adicionar a messagem de erro
function activeErrorMessage(input) {
  input.classList.add("errorActive");
  input.nextElementSibling.classList.add("errorActive");
  input.nextElementSibling.nextElementSibling.classList.add("errorActive");
}
