// Constante para aplicar a classe ativo do CSS
const ativoClass = 'ativo';

// Função para o Accordion List do FAQ
export default function accordionFAQ() {
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');

  function activeAccordion() {
    this.classList.toggle(ativoClass);
    this.nextElementSibling.classList.toggle(ativoClass);
  }

  if (accordionList.length) {
    accordionList[0].classList.add(ativoClass);
    accordionList[0].nextElementSibling.classList.add(ativoClass);

    accordionList.forEach((i) => {
      i.addEventListener('click', activeAccordion);
    });
  }
}
