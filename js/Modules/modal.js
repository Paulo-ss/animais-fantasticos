// Função para abrir e fechar o modal
export default function abrirModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  function toogleModal(e) {
    e.preventDefault();
    containerModal.classList.toggle('ativo');
  }

  // Função para fechar o modal caso o usuário clique fora dele
  function cliqueFora(e) {
    if (e.target === this) {
      this.classList.remove('ativo');
    }
  }

  if (botaoAbrir && botaoFechar && containerModal) {
    botaoAbrir.addEventListener('click', toogleModal);
    botaoFechar.addEventListener('click', toogleModal);
    containerModal.addEventListener('click', cliqueFora);
  }
}
