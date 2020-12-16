// Importando a função para identifcar cliques fora de um elemento do DOM
import outsideClick from './outside-click.js';

export default class DropdownMenu {
  constructor(dropdownMenu, events) {
    this.dropdownMenu = document.querySelectorAll(dropdownMenu);
    // Propriedade padrão para a classe CSS ativo
    this.ativoClasse = 'ativo';

    // Verifica se o events foi definido. Se não for, um valor padrão é setado
    if (events === undefined) this.events = ['touchstart', 'click'];
    else this.events = events;

    // Fazendo com que o this do activateDropdownMenu() faça
    // referência a classe
    this.activateDropdownMenu = this.activateDropdownMenu.bind(this);
  }

  // Método que aplica ativa o dropdownMenu e chama a
  // função outsideClick() para fechar o dropdownMenu caso
  // o usuário efetue um clique fora
  activateDropdownMenu(e) {
    const element = e.currentTarget;
    e.preventDefault();
    element.classList.toggle(this.ativoClasse);

    outsideClick(element, this.events, () => {
      element.classList.remove(this.ativoClasse);
    });
  }

  // Método que adiciona os eventListeners ao dropdownMenu
  // baseado no events passados por parâmetro
  addDropdownEvent() {
    this.dropdownMenu.forEach((i) => {
      this.events.forEach((eventListener) => {
        i.addEventListener(eventListener, this.activateDropdownMenu);
      });
    });
  }

  // Método que inicia a classe
  init() {
    if (this.dropdownMenu.length) {
      this.addDropdownEvent();
    }
    return this;
  }
}
