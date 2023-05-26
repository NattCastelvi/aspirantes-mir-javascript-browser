document.addEventListener('DOMContentLoaded', function() {
    const input = document.querySelector('#texto');
    const btn = document.querySelector('.btn');
    const resultado = document.querySelector('#resultado');
    const resultadoMayusculas = document.querySelector('#resultadoMayusculas');
  
    btn.addEventListener('click', function() {
      const texto = input.value;
      resultado.textContent = texto;
      resultadoMayusculas.textContent = texto.toUpperCase();
    });
  });
  