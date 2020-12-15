export default function initFetchBitcoin(url, target) {
  // Função que faz o fetch em uma API de bitcoin
  // e coloca o valor retornado como innerText do
  // elemento target
  async function fetchBitcoin() {
    try {
      const fetchResponse = await fetch(url);
      const fetchJSON = await fetchResponse.json();

      const btcPreco = document.querySelector(target);

      btcPreco.innerText = (100 / fetchJSON.BRL.sell).toFixed(4);
    } catch (erro) {
      console.log(Error(erro));
    }
  }

  fetchBitcoin();
}
