// Importando a função do outsideClick
import outsideClick from './outside-click.js';

export default class menuMobile {
  constructor(menuButton, menuList, events) {
    // Selecionando o botão que abre e fecha o menu
    this.menuButton = document.querySelector(menuButton);
    // Selecionando o menu
    this.menuList = document.querySelector(menuList);
    // Verifica se o events foi definido. Se não for, um valor padrão é setado
    if (events === undefined) this.events = ['touchstart', 'click'];
    else this.events = events;
    // Propriedade com a classe CSS ativo
    this.ativoClasse = 'ativo';

    // Fazendo com que o this do openMenu faça referência a classe
    this.openMenu = this.openMenu.bind(this);
  }

  // Método que faz o toggle na classe do botão que ativa o menu
  // e no próprio menu e chama a função de outsideClicke para fechar
  // caso o usuário clique fora do menu
  openMenu() {
    this.menuButton.classList.toggle(this.ativoClasse);
    this.menuList.classList.toggle(this.ativoClasse);
    outsideClick(this.menuList, this.events, () => {
      this.menuButton.classList.remove(this.ativoClasse);
      this.menuList.classList.remove(this.ativoClasse);
    });
  }

  // Método que aplica ao botão que ativa o menu
  // os eventListeners
  addMenuMobileEvent() {
    this.events.forEach((i) => {
      this.menuButton.addEventListener(i, this.openMenu);
    });
  }

  // Método que inicia a classe
  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvent();
    }
    return this;
  }
}
