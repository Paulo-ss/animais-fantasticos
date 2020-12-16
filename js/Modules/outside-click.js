// Recebe três argumentos - O elemento que será verificado se o clique foi fora dele
// Os eventos a serem adicinados ao addEventListener (uma array)
// A função de callback que será executada quando o clique fora ocorrer
export default function outsideClick(element, events, callback) {
  // Seleciona o <html>
  const html = document.documentElement;
  const dataOutside = 'data-outside';

  // Função de callback do html ao clique (fora do elemento)
  // que remove os eventListeners do html, remove o atributo
  // data-outside do elemento e executa a função de callback
  function handleOutsideClick(e) {
    if (!element.contains(e.target)) {
      events.forEach((i) => {
        html.removeEventListener(i, handleOutsideClick);
      });

      element.removeAttribute(dataOutside);
      callback();
    }
  }

  // Verifica se o elemento tem o atributo data-outside, se não tiver
  // aplica ao html os eventListeners
  if (!element.hasAttribute(dataOutside)) {
    events.forEach((i) => {
      setTimeout(() => {
        html.addEventListener(i, handleOutsideClick);
      });
    });

    // Adiciona ao elemento o atributo data-outside sem nenhum valor
    element.setAttribute(dataOutside, '');
  }
}
