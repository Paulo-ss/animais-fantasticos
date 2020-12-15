// Método para abrir e fechar o modal
export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal) {
    // Selecionando o elemento do DOM que abre o modal
    this.botaoAbrir = document.querySelector(botaoAbrir);
    // Selecionando o elemento do DOM que fecha o modal
    this.botaoFechar = document.querySelector(botaoFechar);
    // Selecionando o modal
    this.containerModal = document.querySelector(containerModal);

    // Usando o bind para o this do eventToggleModal faça referência a classe e não ao objeto que aciona o callback
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueFora = this.cliqueFora.bind(this);
  }

  // Método que abre/fecha o modal
  toggleModal() {
    this.containerModal.classList.toggle('ativo');
  }

  // Método que previne o padrão e ativa o método toggleModal
  eventToggleModal(e) {
    e.preventDefault();
    this.toggleModal();
  }

  // Método para fechar o modal caso o usuário clique fora dele
  cliqueFora(e) {
    if (e.target === this.containerModal) {
      this.toggleModal();
    }
  }

  // Método que adiciona eventListeners no botão de abrir, fechar e no própria modal
  addModalEvents() {
    this.botaoAbrir.addEventListener('click', this.eventToggleModal);
    this.botaoFechar.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.cliqueFora);
  }

  // Método que inicia a classe
  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEvents();
    }

    return this;
  }
}
