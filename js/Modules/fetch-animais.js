import animaNumeros from './numeros.js';

export default function initFetchAnimais() {
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numeros-animais');
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  async function fetchAnimais(url) {
    try {
      const fecthResponse = await fetch(url);
      const fetchJSON = await fecthResponse.json();
      const numerosGrid = document.querySelector('.numeros-grid');

      fetchJSON.forEach((i) => {
        const divAnimal = createAnimal(i);
        numerosGrid.appendChild(divAnimal);
      });

      animaNumeros();
    } catch (erro) {
      console.log(Error(erro));
    }
  }

  fetchAnimais('./animaisapi.json');
}
