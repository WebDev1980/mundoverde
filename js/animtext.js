$(document).ready(function() {
    var textoCompleto = "'No ser parte de la solución es ser parte del problema'";
    var $textoAnimado = $(".leyenda");
    var velocidadEscritura = 40; // Milisegundos por letra
    var i = 0;

    // Función para animar el texto letra por letra
    function animarTexto() {
        if (i < textoCompleto.length) {
            $textoAnimado.append(textoCompleto.charAt(i));
            i++;
            setTimeout(animarTexto, velocidadEscritura);
        }
    }

    // Agregar una pausa de "n" segundos antes de iniciar la animación
    setTimeout(function() {
        animarTexto();
    }, 4000); // 4000 milisegundos = 4 segundos
});

$(document).ready(function() {
    $("#scroll-to-top").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });
});

$(document).ready(function() {
    $("#scroll-to-bottom").click(function() {
        $("html, body").animate({ scrollTop: $(document).height() }, "slow");
    });
});

document.querySelector('.logoarbol img').addEventListener('animationstart', () => {
	window.scrollBy({ top: 220, behavior: 'smooth' });
});
