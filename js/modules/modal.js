export default class initModal{
  constructor(botaoAbrir, botaoFechar, containerModal){
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);

  // bind this ao callback para
  // fazer referencia ao objeto
  // da classe

  this.eventToggleModal = this.eventToggleModal.bind(this);
  this.cliqueForaModal = this.cliqueForaModal.bind(this);

}


//abre ou fecha o modal
toggleModal(){  
  this.containerModal.classList.toggle('ativo');
}

//Adiciona o evento de toggle ao modal
eventToggleModal(event){
  event.preventDefault();
  this.toggleModal();
}

//Fecha o modal ao clicar do lado de fora
clickForaModal(event) {
  if(event.target === this.containerModal) {
  this.toggleModal();
  }
}

//adiciona os eventos aos elementos do modal
addModalEvents() {
  this.botaoAbrir.addEventListener('click', this.eventToggleModal);
  this.botaoFechar.addEventListener('click', this.eventToggleModal);
  this.containerModal.addEventListener('click', this.clickForaModal);
}

init(){
  if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
    this.addModalEvents();
  }
  return this;
}
}


