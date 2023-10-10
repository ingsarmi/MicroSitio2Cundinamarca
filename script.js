// JavaScript para mostrar y ocultar la información al hacer clic en los botones
const botones = document.querySelectorAll(".boton-sec2");
const seccionesInfo = document.querySelectorAll(".contenido-sec2 > div");

// Función para activar un botón y desactivar otros
function activarBoton(boton) {
    botones.forEach((b) => {
        b.classList.remove("activo");
    });

    boton.classList.add("activo");
}

// Agrega un evento clic a cada botón
botones.forEach((boton) => {
    boton.addEventListener("click", () => {
        const target = boton.getAttribute("data-target");

        seccionesInfo.forEach((seccion) => {
            seccion.style.display = "none";
        });

        const seccionMostrar = document.getElementById(target);
        if (seccionMostrar) {
            seccionMostrar.style.display = "block";
        }

        activarBoton(boton);
    });
});

// Función para activar el primer botón al cargar la página
function activarPrimerBoton() {
    const primerBoton = botones[0];
    if (primerBoton) {
        primerBoton.click();
    }
}

// Agrega un evento para llamar a la función cuando se cargue la página
window.addEventListener("load", activarPrimerBoton);
