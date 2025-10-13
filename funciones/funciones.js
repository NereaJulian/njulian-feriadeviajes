/* =========================
   funciones.js
   Funciones JS para todas las páginas
============================ */

/* -------------------------
   Funciones para index.html
--------------------------- */

// Mensaje de bienvenida automático (aparece y desaparece)
function mostrarMensajeBienvenida() {
    const mensajeDiv = document.getElementById("mensajeBienvenida");
    if (!mensajeDiv) return;

    mensajeDiv.textContent = "¡Bienvenida a la web de la Feria de Viajes!";
    mensajeDiv.classList.add("show");

    // Desaparece después de 8 segundos
    setTimeout(() => {
        mensajeDiv.classList.remove("show");
    }, 8000);
}

// Ejecutar al cargar la página
window.addEventListener("load", mostrarMensajeBienvenida);

/* -------------------------
   Funciones para destinos.html
--------------------------- */

// Filtrar los destinos según el tipo (playa, montaña, ciudad)
function filtrarDestinos(tipo) {
    const destinos = document.querySelectorAll(".destino");
    destinos.forEach(destino => {
        if (tipo === "todos" || destino.dataset.tipo === tipo) {
            destino.style.display = "block";
        } else {
            destino.style.display = "none";
        }
    });
}

/* -------------------------
   Funciones para eventos.html
--------------------------- */

// Mostrar los eventos del día actual
function mostrarEventosHoy() {
    const eventosContainer = document.getElementById("eventosHoy");
    if (!eventosContainer) return;

    const eventos = [
        { hora: "10:00", descripcion: "Inauguración de la feria" },
        { hora: "12:00", descripcion: "Charla: Guías turísticos" },
        { hora: "17:00", descripcion: "Ofertas de hoteles" }
    ];

    eventosContainer.innerHTML = "";
    eventos.forEach(evento => {
        const div = document.createElement("div");
        div.textContent = `${evento.hora} - ${evento.descripcion}`;
        eventosContainer.appendChild(div);
    });
}

/* -------------------------
   Funciones para hoteles.html
--------------------------- */

// Mostrar ofertas de hoteles
function mostrarOfertasHoteles() {
    const ofertasContainer = document.getElementById("ofertasHoteles");
    if (!ofertasContainer) return;

    const ofertas = [
        { hotel: "Hotel Anantara", descuento: "20%" },
        { hotel: "The Peninsula Tokyo", descuento: "15%" },
        { hotel: "The Plaza Hotel", descuento: "10%" }
    ];

    ofertasContainer.innerHTML = "";
    ofertas.forEach(oferta => {
        const div = document.createElement("div");
        div.textContent = `${oferta.hotel} - ${oferta.descuento} de descuento`;
        ofertasContainer.appendChild(div);
    });
}

/* -------------------------
   Funciones para contacto.html
--------------------------- */

// Validar el formulario de contacto y mostrar mensaje de éxito
function validarFormularioContacto(event) {
    event.preventDefault(); // Evita envío automático hasta validar

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const asunto = document.getElementById("asunto").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    // Comprobar que ningún campo esté vacío
    if (!nombre || !email || !asunto || !mensaje) {
        alert("Por favor, complete todos los campos del formulario.");
        return false;
    }

    // Validación simple de email
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        alert("Por favor, introduce un correo electrónico válido.");
        return false;
    }

    // Mostrar mensaje de éxito arriba del formulario
    const mensajeExito = document.getElementById("mensajeExito");
    mensajeExito.textContent = "Mensaje enviado correctamente";
    mensajeExito.style.display = "block";

    setTimeout(() => {
        mensajeExito.style.display = "none";
    }, 5000);

    // Enviar el formulario tras la validación
    event.target.submit();

    return true;
}
