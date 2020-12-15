export default function animaNumeros() {
  function ativaAnimaNumeros() {
    const numeros = document.querySelectorAll('[data-numero]');

    numeros.forEach((i) => {
      const numeroSpan = +i.innerText;
      const incremento = Math.floor(numeroSpan / 100);
      let start = 0;

      const timer = setInterval(() => {
        start += incremento;
        i.innerText = start;
        if (start >= numeroSpan) {
          i.innerText = numeroSpan;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }

  // Argumento mutation para acessar as propriedades e métodos especiais da mutação que ocorreu no elemento que está sendo observado (se assemelha ao "e" para event) - Retorna um array-like com todos os atributos do elemento que sofreram algum tipo de mutação, // no caso, o array-like terá somente um, a classe que recebeu "ativo"
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      // Fazendo com que o observador para de observar o elemento para que a função ativaAnimaNumeros() só ocorra uma vez
      observer.disconnect();
      ativaAnimaNumeros();
    }
  }

  // Criando um observador a partir do construtor nativo MutationObserver(callbackFunction) - Observa um elemento e executa uma função quando alguma alteração nas propriedades desse elemento ocorrer
  const observer = new MutationObserver(handleMutation);
  const observerTarget = document.querySelector('.numeros');

  // Método observe(elemento, {propriedade: valor}) herdado pelo construtor nativo MutationObserver() que observa um elemento em caso de mutação
  observer.observe(observerTarget, { attributes: true });
}
