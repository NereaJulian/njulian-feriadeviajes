// funciones.js

/* -------------------------
   Funciones para index.html
---------------------------*/

// Mostrar un mensaje de bienvenida
function mostrarAlertaBienvenida() {
    alert("¡Bienvenido a la Feria de Viajes!");
}

// Cambiar el idioma del contenido
function cambiarIdioma(idioma) {
    if (idioma === "es") {
        alert("Idioma cambiado a Español");
    } else if (idioma === "en") {
        alert("Idioma cambiado a Inglés");
    }
}

/* -------------------------
   Funciones para destinos.html
---------------------------*/

// Filtrar los destinos según el tipo (playa, montaña, ciudad)
function filtrarDestinos(tipo) {
    const destinos = document.querySelectorAll(".destino");
    destinos.forEach(destino => {
        if(tipo === "todos" || destino.dataset.tipo === tipo) {
            destino.style.display = "block";
        } else {
            destino.style.display = "none";
        }
    });
}

/* -------------------------
   Funciones para eventos.html
---------------------------*/

// Mostrar los eventos del día actual
function mostrarEventosHoy() {
    const eventosContainer = document.getElementById("eventosHoy");
    if(!eventosContainer) return;

    const eventos = [
        { hora: "10:00", descripcion: "Inauguración de la feria" },
        { hora: "12:00", descripcion: "Charla: Guías turísticos" },
        { hora: "17:00", descripcion: "Ofertas de hoteles" }
    ];

    eventosContainer.innerHTML = ""; 
    eventos.forEach(evento => {
        const div = document.createElement("div");
        div.textContent = evento.hora + " - " + evento.descripcion;
        eventosContainer.appendChild(div);
    });
}

/* -------------------------
   Funciones para hoteles.html
---------------------------*/

// Mostrar ofertas de hoteles
function mostrarOfertasHoteles() {
    const ofertasContainer = document.getElementById("ofertasHoteles");
    if(!ofertasContainer) return;

    const ofertas = [
        { hotel: "Hotel Anantara", descuento: "20%" },
        { hotel: "Hotel The Peninsula Tokyo", descuento: "15%" },
        { hotel: "Hotel The Plaza Hotel", descuento: "10%" }
    ];

    ofertasContainer.innerHTML = "";
    ofertas.forEach(oferta => {
        const div = document.createElement("div");
        div.textContent = oferta.hotel + " - " + oferta.descuento + " de descuento";
        ofertasContainer.appendChild(div);
    });
}

/* -------------------------
   Funciones para contacto.html
---------------------------*/

// Validar el formulario de contacto
function validarFormularioContacto() {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    if(!nombre || !email) {
        alert("Por favor, complete todos los campos.");
        return false;
    }
    return true;
}
