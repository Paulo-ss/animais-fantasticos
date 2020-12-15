// Classe da navegação por tabs da sessão de animais
export default class TabNav {
  constructor(menu, content) {
    // Selecionando as tabs que dão chamam as sections de conteúdo
    this.tabMenu = document.querySelectorAll(menu);
    // Selecionando as sections de conteúdo que são chamadas pelas suas respectivas tabs
    this.tabContent = document.querySelectorAll(content);
    // Constante para aplicar a classe CSS ativo
    this.activeClass = 'ativo';
  }

  // Método que aplica a classe de ativo na section de conteúdo que teve sua tab clicada
  activeTab(index) {
    // Remove a classe ativo de todas para que apenas a clicada tenha a classe ativo
    this.tabContent.forEach((i) => {
      i.classList.remove(this.activeClass);
    });

    const direcaoAnima = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.activeClass, direcaoAnima);
  }

  // Método que aplica os eventListener em cada tab selecionada
  addTabNavEvent() {
    this.tabMenu.forEach((i, index) => {
      i.addEventListener('click', () => this.activeTab(index));
    });
  }

  // Método que inicia a classe
  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      // Aplica a classe ativo no primeiro item da NodeList (elemento)
      this.activeTab(0);
      this.addTabNavEvent();
    }

    return this;
  }
}
