// Obtén los botones con los ids correspondientes
const botonGaleria = document.getElementById("galeria");
const botonConocenos = document.getElementById("conocenos");
const botonContacto = document.getElementById("contacto");
const botonGalery = document.getElementById("galery");
const botonUs = document.getElementById("us");
const botonContact = document.getElementById("contact");
// Obtén los elementos con las clases correspondientes
const elementoOculto1 = document.querySelector(".hide1");
const elementoOculto2 = document.querySelector(".hide2");
const elementoOculto3 = document.querySelector(".hide3");

// Agrega eventos de clic a los botones
botonGaleria.addEventListener("click", () => {
    // Muestra el elemento oculto 1
    elementoOculto1.style.display = "block";
    elementoOculto2.style.display = "none";
    elementoOculto3.style.display = "none";

    $('.slider1')._TMS({
        duration: 800,
        easing: 'easeOutQuad',
        preset: 'diagonalExpand',
        slideshow: 2000
    })
});

botonGalery.addEventListener("click", () => {
    // Muestra el elemento oculto 1
    elementoOculto1.style.display = "block";
    elementoOculto2.style.display = "none";
    elementoOculto3.style.display = "none";

    $('.slider1')._TMS({
        duration: 800,
        easing: 'easeOutQuad',
        preset: 'diagonalExpand',
        slideshow: 2000
    })
});

botonConocenos.addEventListener("click", () => {
    // Muestra el elemento oculto 2
    elementoOculto2.style.display = "block";
    elementoOculto1.style.display = "none";
    elementoOculto3.style.display = "none";
});

botonUs.addEventListener("click", () => {
    // Muestra el elemento oculto 2
    elementoOculto2.style.display = "block";
    elementoOculto1.style.display = "none";
    elementoOculto3.style.display = "none";
});

botonContacto.addEventListener("click", () => {
    // Muestra el elemento oculto 3
    elementoOculto3.style.display = "block";
    elementoOculto1.style.display = "none";
    elementoOculto2.style.display = "none";
});

botonContact.addEventListener("click", () => {
    // Muestra el elemento oculto 3
    elementoOculto3.style.display = "block";
    elementoOculto1.style.display = "none";
    elementoOculto2.style.display = "none";
});
