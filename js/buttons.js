const botonGaleria = document.getElementById("galeria");
const botonGaleriam = document.getElementById("galeriam");
const botonConocenos = document.getElementById("conocenos");
const botonContacto = document.getElementById("contacto");

const elementoOculto1 = document.querySelector(".hide1");
const elementoOculto2 = document.querySelector(".hide2");
const elementoOculto3 = document.querySelector(".hide3");
const elementoOculto4 = document.querySelector(".hide4");

let animacionActiva = false;
let animacionSlider1;
let botonActivo = null;

function inicializarElementos() {
    elementoOculto1.style.display = "none";
    elementoOculto2.style.display = "none";
    elementoOculto3.style.display = "none";
    elementoOculto4.style.display = "none";
}

function desactivarBotonActivo() {
    if (botonActivo) {
        botonActivo.classList.remove("activo");
    }
}

botonGaleria.addEventListener("click", () => {
    desactivarBotonActivo();
    animacionActiva = !animacionActiva;
    elementoOculto1.style.display = animacionActiva ? "block" : "none";
    elementoOculto2.style.display = "none";
    elementoOculto3.style.display = "none";
    elementoOculto4.style.display = "none";

    if (animacionActiva) {
        if (!animacionSlider1) {
            animacionSlider1 = $('.slider1')._TMS({
                duration: 800,
                easing: 'easeOutQuad',
                preset: 'diagonalExpand',
                slideshow: 2000
            });
        }
    } else {
        if (animacionSlider1) {
            animacionSlider1._tmsStop();
            animacionSlider1 = null;
        }
    }

    botonActivo = botonGaleria;
    botonGaleria.classList.add("activo");
    window.scrollBy(0, 250);
    // window.scrollTo(0, document.body.scrollHeight);
});

botonConocenos.addEventListener("click", () => {
    desactivarBotonActivo();
    elementoOculto2.style.display = elementoOculto2.style.display === "none" ? "block" : "none";
    elementoOculto1.style.display = "none";
    elementoOculto3.style.display = "none";
    elementoOculto4.style.display = "none";

    botonActivo = botonConocenos;
    botonConocenos.classList.add("activo");
    window.scrollBy(0, 250);
    // window.scrollTo(0, document.body.scrollHeight);
});

botonContacto.addEventListener("click", () => {
    desactivarBotonActivo();
    elementoOculto3.style.display = elementoOculto3.style.display === "none" ? "block" : "none";
    elementoOculto1.style.display = "none";
    elementoOculto2.style.display = "none";
    elementoOculto4.style.display = "none";

    botonActivo = botonContacto;
    botonContacto.classList.add("activo");
    window.scrollBy(0, 250);
    // window.scrollTo(0, document.body.scrollHeight);
});

botonGaleriam.addEventListener("click", () => {
    desactivarBotonActivo();
    elementoOculto4.style.display = elementoOculto4.style.display === "none" ? "block" : "none";
    elementoOculto2.style.display = "none";
    elementoOculto3.style.display = "none";
    elementoOculto1.style.display = "none";

    botonActivo = botonGaleriam;
    botonGaleriam.classList.add("activo");
    window.scrollBy(0, 250);
    // window.scrollTo(0, document.body.scrollHeight);
});

document.addEventListener("DOMContentLoaded", inicializarElementos);
