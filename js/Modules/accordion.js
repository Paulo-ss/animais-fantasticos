// Classe para o Accordion List do FAQ
export default class accordionFAQ {
  constructor(list) {
    // Selecionando todos os elementos que ativam o accordion
    this.accordionList = document.querySelectorAll(list);
    // Constante para aplicar a classe CSS ativo
    this.activeClass = 'ativo';
  }

  // Método que da toggle na classe dos elementos do accordion (target e conteúdo)
  toggleAccordion(element) {
    element.classList.toggle(this.activeClass);
    element.nextElementSibling.classList.toggle(this.activeClass);
  }

  // Método que adiciona o eventListener de click a todos os itens da NodeList (elemento que ativo o accordion)
  addAcordionEvent() {
    this.accordionList.forEach((i) => {
      i.addEventListener('click', () => this.toggleAccordion(i));
    });
  }

  // Método para iniciar a classe
  init() {
    if (this.accordionList.length) {
      // Aplicando a classe ativo no primeiro iten do accordion assim que a página é carregada
      this.toggleAccordion(this.accordionList[0]);
      // Chamando o método para adicionar os eventos
      this.addAcordionEvent();
    }
    return this;
  }
}
