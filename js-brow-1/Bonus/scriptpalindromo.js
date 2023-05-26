document.addEventListener('DOMContentLoaded', function() {
  const input = document.querySelector('#texto');
  const btn = document.querySelector('.btn');
  const resultado = document.querySelector('#resultado');

  btn.addEventListener('click', function() {
    const texto = input.value;
    const resultadoPalindromo = esPalindromo(texto);
    resultado.textContent = resultadoPalindromo ? 'Es un palíndromo' : 'No es un palíndromo';
  });

  function esPalindromo(palabra) {
    const palabraFormateada = palabra.toLowerCase().replace(/\s/g, '');
    const longitud = palabraFormateada.length;
    for (let i = 0; i < longitud / 2; i++) {
      if (palabraFormateada[i] !== palabraFormateada[longitud - 1 - i]) {
        return false;
      }
    }
    return true;
  }
});

  