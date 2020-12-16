export default class Funcionamento {
  constructor(funcionamento, activeClass) {
    // Selecionando do elemento DOM que tem os dados de funcionamento
    this.funcionamento = document.querySelector(funcionamento);
    // Propriedade com a classe CSS
    this.activeClass = activeClass;
  }

  // Método que pega os valores do dataset do elemento selecionado
  // que correspondem ao dias da semana e horas de funcionamento
  dadosFuncionamento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number);
    this.horasSemana = this.funcionamento.dataset.horario.split(',').map(Number);
  }

  // Método que pega o dia e hora atuais
  dadosAgora() {
    this.dataAgora = new Date();
    this.hoje = this.dataAgora.getDay();
    this.horarioAgora = this.dataAgora.getUTCHours() - 3;
  }

  // Método verifica se o dia e horário atual correspondem ao de funcionamento
  estaAberto() {
    const semanaAberto = this.diasSemana.indexOf(this.hoje) !== -1;
    const horarioAberto = ((this.horarioAgora >= this.horasSemana[0]) && (this.horarioAgora < this.horasSemana[1]));

    return semanaAberto && horarioAberto;
  }

  // Método que aplica uma classe CSS ao elemento selecionado
  // e o atributo title caso o método estaAberto() retorna true
  ativaAberto() {
    if (this.estaAberto()) {
      this.funcionamento.classList.add(this.activeClass);
      this.funcionamento.setAttribute('title', 'Aberto');
    } else {
      this.funcionamento.setAttribute('title', 'Fechado');
    }
  }

  // Método que inicia a classe
  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento();
      this.dadosAgora();
      this.ativaAberto();
    }
    return this;
  }
}
