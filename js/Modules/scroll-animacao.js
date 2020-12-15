// Função que anima as sections no scroll da página
export default function animacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  // Altura da tela do usuário 50% para subtrair do valor do topo da seção no getBoundingClientRect()
  const windowAltura = window.innerHeight * 0.5;

  function animaScroll() {
    sections.forEach((i) => {
      const sectionTop = i.getBoundingClientRect().top - windowAltura;
      if (sectionTop < 0) {
        i.classList.add('ativo');
      } else if (i.classList.contains('ativo')) {
        i.classList.remove('ativo');
      }
    });
  }

  if (sections.length) {
    // Chamando a função da animação do scroll sem precisar dar o scroll para o primeiro elemento ficar visível
    animaScroll();
    window.addEventListener('scroll', animaScroll);
  }
}
