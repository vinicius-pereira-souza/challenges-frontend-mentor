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

    } else if(e.target.id === 'mes') {
      this.cardDataMes.innerText = e.target.value

    } else if(e.target.id === 'ano') {
      this.cardDataAno.innerText = e.target.value

    } else {
      this.numberCvc.innerText = e.target.value
    }
  }


  adicionarEventos = () => {
    this.inputs.forEach(input => {
      input.addEventListener('keyup', this.handleChangeInput)
    })
  }
}

const formulario = new Form()