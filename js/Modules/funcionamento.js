export default function funcionamento() {
  const funcionamentoLI = document.querySelector('[data-semana]');

  // Pegando o valor do dataset data-semana = 1,2,3,4,5
  const diasSemana = funcionamentoLI.dataset.semana.split(',').map(Number); // Usar o método de iteração de array map(Number) com o construtor number dentro, converte todos os itens da array de string para number (caso seja possível converte-los)
  const horasSemana = funcionamentoLI.dataset.horario.split(',').map(Number);

  // Pegando a data de agora (quando o JS é executado)
  const dataAgora = new Date();
  // Pegando o dia de hoje
  const hoje = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  // Verificando se o dia de hoje está dentro da array com os dias de funcionamento
  const semanaAberto = diasSemana.indexOf(hoje) !== -1;

  // Verificando se o horario de agora está dentro do horário de funcionamento
  const horarioAberto = ((horarioAgora >= horasSemana[0]) && (horarioAgora < horasSemana[1]));

  if (semanaAberto && horarioAberto) {
    funcionamentoLI.classList.add('aberto');
    funcionamentoLI.setAttribute('title', 'Aberto');
  } else {
    funcionamentoLI.setAttribute('title', 'Fechado');
  }
}
