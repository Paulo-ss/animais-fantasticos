import outsideClick from './outside-click.js';

export default function dropdownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');

  function handleClick(e) {
    e.preventDefault();
    this.classList.add('ativo');
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('ativo');
    });
  }

  dropdownMenus.forEach((i) => {
    /* Adicionando os eventListeners desse jeito, é possível adicionar quantos eventos
    forem necessários para o item sem precisar reescrever o código, apenas adicionando ele na array */
    ['touchstart', 'click'].forEach((eventListener) => {
      i.addEventListener(eventListener, handleClick);
    });
  });
}
