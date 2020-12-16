// Função helper de debounce - É uma função usada
// para evitar que uma outra função ocorra muitas
// vezes desnecessariamente, por exemplo, uma função
// que é ativada ao scroll da página
export default function debounce(callback, delay) {
  // Variável timer para o setTimeout
  let timer;

  return (...args) => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      callback(...args);
      timer = null;
    }, delay);
  };
}
