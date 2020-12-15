export default class AnimaNumeros {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;

    // Fazendo com que o this do handleMutation faça referência
    // a classe e não ao objeto this.observer
    this.handleMutation = this.handleMutation.bind(this);
  }

  // Método que recebe um elemento do DOM que tem
  // como innerText um número e incrementa esse número
  // de 0 até o valor final
  static incrementarNumero(numero) {
    const numeroSpan = +numero.innerText;
    const incremento = Math.floor(numeroSpan / 100);
    let start = 0;

    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start >= numeroSpan) {
        numero.innerText = numeroSpan;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  // Método que ativa o método de incrementarNumero para cada elemento selecionado do DOM
  ativaAnimaNumeros() {
    this.numeros.forEach((i) => this.constructor.incrementarNumero(i));
  }

  // Método de callback do objeto observer que ocorre assim que uma mutação
  // no seu elemento target do DOM ocorrer
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      // Fazendo com que o observador para de observar o elemento para que a função ativaAnimaNumeros() só ocorra uma vez
      this.observer.disconnect();
      this.ativaAnimaNumeros();
    }
  }

  // Método que cria um objeto oberser com a função de callback
  // handleMutation() e define um elemento do DOM como o target
  // desse observer, verificando mutações nos seus atributos
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  // Método que inicia a classe
  init() {
    if (this.numeros.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
