// Constante para aplicar a classe ativo do CSS
const ativoClass = 'ativo';

// Função da navegação por tabs da sessão de animais
export default function iniciarTabMenu() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  function activeTab(index) {
    tabContent.forEach((i) => {
      i.classList.remove(ativoClass);
    });
    const direcaoAnima = tabContent[index].dataset.anime;
    tabContent[index].classList.add(ativoClass, direcaoAnima);
  }

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add(ativoClass);

    tabMenu.forEach((i, index) => {
      i.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
