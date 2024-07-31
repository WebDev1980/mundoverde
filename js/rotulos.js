// Obtén los elementos correspondientes a los enlaces
const conocenosLink = document.getElementById("us");
const contactoLink = document.getElementById("contact");
const galeriaLink = document.getElementById("galery");

// Obtén los botones correspondientes
const conocenosButton = document.getElementById("conocenos");
const contactoButton = document.getElementById("contacto");
const galeriaButton = document.getElementById("galeria");

// Agrega el evento click a los enlaces
conocenosLink.addEventListener("click", () => {
  conocenosButton.click();
});

contactoLink.addEventListener("click", () => {
  contactoButton.click();
});

galeriaLink.addEventListener("click", () => {
  galeriaButton.click();
});
