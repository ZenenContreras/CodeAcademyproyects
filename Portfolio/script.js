const textos = ["FrontEnd Developer", "Backend Developer", "FullStack Developer"];
let indexTexto = 0;
let indexLetra = 0;
let borrando = false;

const textElement = document.getElementById("text");

function typeEffect() {
  const textoActual = textos[indexTexto];

  if (!borrando) {
    // Escribiendo
    textElement.textContent = textoActual.substring(0, indexLetra + 1);
    indexLetra++;

    if (indexLetra === textoActual.length) {
      borrando = true;
      setTimeout(typeEffect, 1500); // Pausa antes de borrar
      return;
    }
  } else {
    // Borrando
    textElement.textContent = textoActual.substring(0, indexLetra - 1);
    indexLetra--;

    if (indexLetra === 0) {
      borrando = false;
      indexTexto = (indexTexto + 1) % textos.length;
    }
  }

  setTimeout(typeEffect, borrando ? 50 : 100); // Velocidad al borrar y escribir
}

typeEffect(); // Inicia la animación

const menuBtn = document.querySelector('.responsive-menu');
const navMenu = document.querySelector('.nav');

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

