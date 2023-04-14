class Form {
  constructor() {
    this.inputs = document.querySelectorAll(".form input");
    this.porcentsOptions = document.querySelector(".btnsOptions");
    this.btns = document.querySelectorAll(".btnsOptions button");
    this.btnReset = document.querySelector("#reset");
    this.innerValues = document.querySelectorAll(".innerPrice");
    this.values = {
      account: 0,
      porcent: 0,
      division: 0,
    };
    this.price = {
      total: 0,
      amount: 0,
    };
  }

  handleOptionPorcent = (e) => {
    e.preventDefault();

    if (e.type === "click" && e.target.id !== "selecttip") {
      this.values.porcent = +e.target.textContent.replace("%", "");
    } else if (
      e.type === "change" &&
      e.target.id === "selecttip" &&
      e.target.value > 0
    ) {
      this.values.porcent = +e.target.value;
    }
    this.calculator();
  };

  handleIntputChange = (e) => {
    const maxNumber = e.target.value;
    if (e.target.id === "bill" && maxNumber) {
      this.values.account = +e.target.value;
      this.calculator();
    } else if (e.target.id === "numberofpeople" && maxNumber) {
      this.values.division = +e.target.value;
      this.calculator();
    }
  };

  handleResetValues = (e) => {
    this.innerValues[0].textContent = "0.00";
    this.innerValues[1].textContent = "0.00";

    this.inputs.forEach((input) => {
      input.value = "";
    });
  };

  errorIntputChange = (e) => {
    if (e.target.value <= 0) {
      e.target.parentElement.classList.add("error");
      return;
    } else {
      e.target.parentElement.classList.remove("error");
    }
  };

  calculator = () => {
    const { account, porcent, division } = this.values;

    if (account && porcent && division) {
      let valorDesconto = porcent / 100;
      let maisPess = account / division;

      let gorjeta = (account * valorDesconto) / division;
      let gorFormat = +gorjeta.toFixed(2);
      let totalPagar = maisPess + gorFormat;

      this.price.amount = gorFormat;
      this.price.total = totalPagar.toFixed(2);

      this.innerValues[0].textContent = this.price.amount;
      this.innerValues[1].textContent = this.price.total;

      this.btnReset.removeAttribute("disabled");
    }
  };

  init = () => {
    this.porcentsOptions.addEventListener("click", this.handleOptionPorcent);
    this.porcentsOptions.addEventListener("change", this.handleOptionPorcent);

    this.inputs.forEach((input) => {
      input.addEventListener("change", this.errorIntputChange);
    });

    this.inputs.forEach((input) => {
      input.addEventListener("change", this.handleIntputChange);
    });

    this.btnReset.addEventListener("click", this.handleResetValues);
  };
}

const form = new Form();
form.init();
