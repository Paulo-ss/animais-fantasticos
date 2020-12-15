export default function initFetchBitcoin() {
  async function fetchBitcoin() {
    try {
      const fetchResponse = await fetch('https://blockchain.info/ticker');
      const fetchJSON = await fetchResponse.json();

      const btcPreco = document.querySelector('[data-bitcoin]');

      btcPreco.innerText = (100 / fetchJSON.BRL.sell).toFixed(4);
    } catch (erro) {
      console.log(Error(erro));
    }
  }

  fetchBitcoin();
}
