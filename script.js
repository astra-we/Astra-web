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
