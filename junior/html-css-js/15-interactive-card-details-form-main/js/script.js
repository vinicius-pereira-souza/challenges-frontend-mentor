class Form {
  constructor() {
    this.cardNumber = document.querySelector('.cardFrontNum')
    this.cardName = document.querySelector('.nomeCard')
    this.cardDataMes = document.querySelector('span.mes')
    this.cardDataAno = document.querySelector('span.ano')
    this.numberCvc = document.querySelector('.numberBack')

    this.inputs = document.querySelectorAll('input')

    this.adicionarEventos()
  }

  handleChangeInput = (e) => {
    if(e.target.id === 'nomeCard') {
      this.cardName.innerText = e.target.value

    } else if(e.target.id === 'numeroCard') {
      this.cardNumber.innerText = e.target.value
      this.handleLimitedCaracter(16, e.target)

    } else if(e.target.id === 'mes') {
      this.cardDataMes.innerText = e.target.value
      this.handleLimitedCaracter(2, e.target)

    } else if(e.target.id === 'ano') {
      this.cardDataAno.innerText = e.target.value
      this.handleLimitedCaracter(1, e.target)

    } else {
      this.numberCvc.innerText = e.target.value
      this.handleLimitedCaracter(3, e.target)
    }
  }

  handleLimitedCaracter(limite, input) {
    if(input.value > limite) {
      input.value = input.value.substring(0, limite)
    }
  }

  adicionarEventos = () => {
    this.inputs.forEach(input => {
      input.addEventListener('keyup', this.handleChangeInput)
    })
  }
}

const formulario = new Form()