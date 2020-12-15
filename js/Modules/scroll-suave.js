// Classe do scroll suave
export default class scrollSuave {
  // Definindo o construtor da classe
  constructor(links, options) {
    // Selecionando os links no DOM que são passados por parâmetro
    this.linksInternos = document.querySelectorAll(links);

    // Caso options não seja definido, terá um valor padrão setado
    if (options === undefined) {
      this.options = { behavior: 'smooth', block: 'start' };
    } else {
      this.options = options;
    }

    // Mudando o this do método scrollToSection para a própria classe ao invés do link clicado
    this.scrollToSection = this.scrollToSection.bind(this);
  }

  // Método que utiliza o método scrollIntoView para criar o scroll suave na página
  scrollToSection(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
  }

  // Método que adiciona o eventListener de click a todos os link selecionados
  addLinkEvent() {
    this.linksInternos.forEach((i) => {
      i.addEventListener('click', this.scrollToSection);
    });
  }

  // Método para inicar a classe quando um novo objeto for declarado
  init() {
    // Caso nenhum link seja selecionado, a classe não é iniciada
    if (this.linksInternos.length) {
      this.addLinkEvent();
    }
    return this;
  }
}
