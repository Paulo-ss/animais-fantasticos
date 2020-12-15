// Importa a classe de AnimaNumeros
import AnimaNumeros from './numeros.js';

export default function fetchAnimais(url, target) {
  // Seleciona o elemento do DOM que terá as divs criadas
  // contendo o resultado do fetch
  const numerosGrid = document.querySelector(target);

  // Função que cria o div dentro do target. Essa div
  // tem um span contendo a espécia do animal e o número total
  // Ambos os valores são puxados do objeto JSON a partir do fetch
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numeros-animais');
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  // Função que cria a div que terá o conteúdo e a posiciona
  // no final do body
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  // Função que inicia a classe de AnimaNumeros
  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }

  // Função assíncrona que faz o fetch na url passada e retorna
  // o corpo do response como JSON
  async function criarAnimais() {
    try {
      // Espera o retorno do fetch em response
      const fecthResponse = await fetch(url);
      // Espera que o response vire um objeto JSON
      const fetchJSON = await fecthResponse.json();

      // Após a transformação de json, chama as funções
      // para preencher e animar os números
      fetchJSON.forEach((i) => preencherAnimais(i));
      animaAnimaisNumeros();
    } catch (erro) {
      console.log(Error(erro));
    }
  }

  return criarAnimais();
}
