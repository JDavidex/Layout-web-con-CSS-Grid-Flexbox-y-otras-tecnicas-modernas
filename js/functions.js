// Función para ajustar el contenido de los pasos en dispositivos móviles:
function stepRemove() {
  var steps = document.querySelectorAll(".steps li");

  function ajustarContenido() {
    if (window.innerWidth <= 768) {
      steps.forEach(function (step) {
        step.textContent = step.textContent.replace(/^Step \d+ : /, "");
      });
    } else {
      // Restaurar el contenido original
      steps.forEach(function (step, index) {
        step.textContent =
          "Step " +
          (index + 1) +
          " : " +
          step.textContent.replace(/^Step \d+ : /, "");
      });
    }
  }

  // Llamar a la función al cargar la página
  ajustarContenido();

  // Llamar a la función al cambiar el tamaño de la ventana
  window.addEventListener("resize", ajustarContenido);
}

// Llamar a la función al cargar la página
window.addEventListener("load", stepRemove);

// Función de carrusel en el header en dispositivos móviles:
document.addEventListener("DOMContentLoaded", function () {
  function carousel() {
    var header = document.querySelector("header");
    var spans = document.querySelectorAll("header span");
    var currentIndex = 0;

    function showSpan(index) {
      // Ocultar todos los spans
      spans.forEach(function (span) {
        span.style.display = "none";
      });

      // Mostrar el span actual
      spans[index].style.display = "flex";
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + spans.length) % spans.length;
      showSpan(currentIndex);
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % spans.length;
      showSpan(currentIndex);
    }

    if (window.innerWidth <= 768) {
      // Mostrar el primer span al cargar la página si el ancho es menor o igual a 768
      showSpan(currentIndex);

      // Agregar eventos a los botones de flecha solo si el ancho es menor o igual a 768
      document
        .getElementById("prevButton")
        .addEventListener("click", prevSlide);
      document
        .getElementById("nextButton")
        .addEventListener("click", nextSlide);
    } else {
      // Restaurar el estado original si el ancho es mayor a 768
      spans.forEach(function (span) {
        span.style.display = "flex"; // Muestra todos los spans
      });

      // Eliminar eventos si el ancho es mayor a 768
      document
        .getElementById("prevButton")
        .removeEventListener("click", prevSlide);
      document
        .getElementById("nextButton")
        .removeEventListener("click", nextSlide);
    }
  }

  // Llamar a la función al cargar la página
  carousel();

  // Llamar a la función al cambiar el tamaño de la ventana
  window.addEventListener("resize", carousel);
});
