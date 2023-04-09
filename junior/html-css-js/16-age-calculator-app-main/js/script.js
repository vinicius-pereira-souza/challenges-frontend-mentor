class DatasForm {
  constructor() {
    this.btn = document.querySelector("button");
    this.inputs = document.querySelectorAll("input");
    this.spans = document.querySelectorAll("p > span");
    this.data = new Date();
  }

  /* 
    Executa a função do cálculo e limpa os inputs e
    executa a função que vai exibir o erro
  */
  handleClick = (e) => {
    e.preventDefault();
    for (let i = 0; i < this.inputs.length; i++) {
      if (!this.inputs[i].value) {
        this.showError(this.inputs[i]);
      } else {
        this.calculatorData();
      }
    }

    this.inputs.forEach((input) => {
      input.value = "";
    });
  };

  /* 
    Executa a função de validação 
  */
  handleChange = (e) => {
    this.validationInputValue(e.target);

    if (e.target.value && e.target.parentElement.classList.contains("err")) {
      e.target.parentElement.classList.remove("err");
    }
  };

  /* 
    Mostrar a mensagem de erro caso o número de caractere dos inputs não forem o esperado
  */
  handleKeyUp = (e) => {
    if (
      (e.target.id === "day" || e.target.id === "month") &&
      e.target.value.length >= 3
    ) {
      this.showError(e.target);
    } else if (e.target.id === "year" && e.target.value.length >= 5) {
      this.showError(e.target);
    }
  };

  /* 
    Mostrar a mensagem de erro caso o valor dos inputs não existirem
  */
  handleFocusOut = (e) => {
    if (!e.target.value) {
      this.showError(e.target);
    }
  };

  /* 
    Válida se esta aparecendo a mensagem de erro e remove
  */
  handleFocus = (e) => {
    if (e.target.value && e.target.parentElement.classList.contains("err")) {
      e.target.parentElement.classList.remove("err");
    }
  };

  /* 
    Faz os cálculos e monstra na tela e 
    remove a mensagem de erro dos inputs
  */
  calculatorData = () => {
    const year = this.data.getFullYear() - this.inputs[2].value;
    const month = Math.abs(this.data.getMonth() + 1 - this.inputs[1].value);
    const day = Math.abs(this.data.getDate() - this.inputs[0].value);

    this.spans[0].textContent = year;
    this.spans[1].textContent = month;
    this.spans[2].textContent = day;

    this.inputs.forEach((input) => {
      input.parentElement.classList.remove("err");
    });
  };

  /* 
    Mostra a mensagem de erro caso o valor dos inputs não existirem
  */
  validationInputValue = (input) => {
    if (input.id === "day" && (input.value < 1 || input.value > 31)) {
      this.showError(input);
    } else if (input.id === "month" && (input.value < 1 || input.value > 12)) {
      this.showError(input);
    } else if (input.id === "year" && input.value > this.data.getFullYear()) {
      this.showError(input);
    }
  };

  /* 
    Exibe a mensagem de error e para a execução
  */
  showError = (input) => {
    input.parentElement.classList.add("err");
    return;
  };

  /* 
    Adiciona os eventos para os inputs
    Adiciona o evento para o botão
  */
  init = () => {
    this.btn.addEventListener("click", this.handleClick);
    this.inputs.forEach((input) => {
      input.addEventListener("keyup", this.handleKeyUp);
    });
    this.inputs.forEach((input) => {
      input.addEventListener("focusout", this.handleFocusOut);
    });
    this.inputs.forEach((input) => {
      input.addEventListener("focus", this.handleFocus);
    });
    this.inputs.forEach((input) => {
      input.addEventListener("change", this.handleChange);
    });
  };
}

const form = new DatasForm();
form.init();
