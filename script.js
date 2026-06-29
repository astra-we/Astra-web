const reveals = document.querySelectorAll(
  ".porque, .proyectos, .proceso, .sobre, .testimonios"
);

function mostrarElementos() {

  reveals.forEach(section => {

    const top = section.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      section.classList.add("active");
    }

  });

}

window.addEventListener("scroll", mostrarElementos);

mostrarElementos();

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {

    header.style.background = "rgba(0,0,0,0.95)";
    header.style.boxShadow = "0 0 25px rgba(138,43,226,.2)";

  } else {

    header.style.background = "rgba(0,0,0,0.85)";
    header.style.boxShadow = "none";

  }

});

const secciones = document.querySelectorAll(
".porque, .proyectos, .proceso, .sobre, .stats, .destacado"
);

const mostrarSeccion = () => {

  secciones.forEach(seccion => {

    const posicion = seccion.getBoundingClientRect().top;

    if(posicion < window.innerHeight - 100){

      seccion.classList.add("active");

    }

  });

}

window.addEventListener("scroll", mostrarSeccion);

mostrarSeccion();

const contadores = document.querySelectorAll(".contador");

const iniciarContadores = () => {

  contadores.forEach(contador => {

    const objetivo = +contador.dataset.target;

    let numero = 0;

    const intervalo = setInterval(() => {

      numero++;

      if(numero >= objetivo){

        numero = objetivo;

        clearInterval(intervalo);

      }

      contador.textContent = numero + (objetivo == 100 ? "%" : "+");

    },20);

  });

}

let iniciado = false;

window.addEventListener("scroll", () => {

  const stats = document.querySelector(".stats");

  const posicion = stats.getBoundingClientRect().top;

  if(posicion < window.innerHeight - 100 && !iniciado){

    iniciado = true;

    iniciarContadores();

  }

});
