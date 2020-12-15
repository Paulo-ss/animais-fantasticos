import outsideClick from './outside-click.js';

export default function menuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ['touchstart', 'click'];

  function openMenu() {
    menuButton.classList.toggle('ativo');
    menuList.classList.toggle('ativo');
    outsideClick(menuList, eventos, () => {
      menuButton.classList.remove('ativo');
      menuList.classList.remove('ativo');
    });
  }

  if (menuButton) {
    eventos.forEach((i) => {
      menuButton.addEventListener(i, openMenu);
    });
  }
}
