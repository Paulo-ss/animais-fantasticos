// Classe que anima as sections no scroll da página
export default class ScrollAnima {
  constructor(sections) {
    // Selecionando as section do DOM que serão animadas no scroll
    this.sections = document.querySelectorAll(sections);
    // Pegando 50% da tela do usuário para subtrair do valor do topo da seção
    this.windowMetade = window.innerHeight * 0.5;

    // Fazendo com que o this do método animaScroll faça referência a classe
    this.checkScroll = this.checkScroll.bind(this);
  }

  // Método que retorna um objeto com a distância do topo
  // dos elementos selecionados do DOM e o próprio elemento
  // em uma array e armanzena essa array na propriedade distance da classe
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: offset - this.windowMetade,
      };
    });
  }

  // Método que compara a distância do scrollY da página
  // em relação ao offsetTop do elemento DOM e, caso seja maior,
  // anima a seção fazendo com que ela apareca na página
  checkScroll() {
    this.distance.forEach((i) => {
      if (window.pageYOffset > i.offset) {
        i.element.classList.add('ativo');
      } else if (i.element.classList.contains('ativo')) {
        i.element.classList.remove('ativo');
      }
    });
  }

  // Método que inicia a classe
  init() {
    if (this.sections.length) {
      // Chamando o método de getDistance assim que a página carregar
      this.getDistance();
      // Chamando a função da animação do scroll sem precisar dar o scroll para o primeiro elemento ficar visível
      this.checkScroll();
      window.addEventListener('scroll', this.checkScroll);
    }
    return this;
  }

  // Método que remove o eventListener de scroll do window para parar a animação
  stop() {
    window.removeEventListener('scroll', this.checkScroll);
  }
}
