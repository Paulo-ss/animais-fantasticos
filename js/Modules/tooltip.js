export default class ToolTip {
  constructor(tooltip) {
    this.tooltips = document.querySelectorAll(tooltip);

    // Mudando o this dos métodos de callback de evento para
    // fazerem referência a classe e não ao objeto
    // que chama o callback do evento
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  // Método que pega a propriedade tooltipBox que tem a tooltip criada
  // e posiciona ela na página a partir da posição do mouse na tela
  onMouseMove(e) {
    this.tooltipBox.style.top = `${e.pageY + 20}px`;

    // Verifica se a tooltipbox vai estourar o tamanho da página
    // Caso estoure, inverte a posição dela
    if ((e.pageX + 240) > window.innerWidth) {
      this.tooltipBox.style.left = `${e.pageX - 190}px`;
    } else {
      this.tooltipBox.style.left = `${e.pageX + 20}px`;
    }
  }

  // Método para assim que o mouse sair do elemento que chama a tooltipBox
  // ela seja deletada e os eventos removidos do elemento
  onMouseLeave({ currentTarget }) {
    this.tooltipBox.remove();

    currentTarget.removeEventListener('mousemove', this.onMouseMove);
    currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
  }

  // Método que cria a tooltipBox, a posiciona como último
  // elemento do body e a armazena em uma propriedade da classe
  criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const textTooltip = element.getAttribute('aria-label');

    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = textTooltip;
    document.body.appendChild(tooltipBox);

    // Armanazena a tooltipbox criada em uma propriedade da classe tooltipBox
    this.tooltipBox = tooltipBox;
  }

  // Método para que assim que o mouse entrar no elemento que cria a tooltipBox
  // a mesma seja criada e os eventos de mousemove e mouseleave sejam adicionados
  onMouseOver({ currentTarget }) {
    // Chama o método que cria a tooltipbox
    this.criarTooltipBox(currentTarget);

    currentTarget.addEventListener('mousemove', this.onMouseMove);
    currentTarget.addEventListener('mouseleave', this.onMouseLeave);
  }

  // Método que adiciona o evento de mouseover no elemento que cria a tooltip
  addTooltipsEvents() {
    this.tooltips.forEach((i) => {
      i.addEventListener('mouseover', this.onMouseOver);
    });
  }

  // Método que inicia a classe
  init() {
    if (this.tooltips.length) {
      this.addTooltipsEvents();
    }
    return this;
  }
}
