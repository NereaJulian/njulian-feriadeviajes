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

function mostrarOfertasHoteles() {
    const ofertasContainer = document.getElementById("ofertasHoteles");
    const boton = document.querySelector("button[onclick='mostrarOfertasHoteles()']");
    if (!ofertasContainer || !boton) return;

    // Si ya hay contenido, lo borramos (ocultamos las ofertas)
    if (ofertasContainer.innerHTML.trim() !== "") {
        ofertasContainer.innerHTML = "";
        boton.textContent = "Mostrar ofertas de hoteles";
        return;
    }

    // Si no hay contenido, mostramos las ofertas
    const ofertas = [
        { hotel: "Hotel Anantara", descuento: "20%" },
        { hotel: "The Peninsula Tokyo", descuento: "15%" },
        { hotel: "The Plaza Hotel", descuento: "10%" },
        { hotel: "Hotel Barcelona Centro", descuento: "12%" },
        { hotel: "Roma Antica Suites", descuento: "18%" },
        { hotel: "Bangkok Riverside", descuento: "22%" }
    ];

    let html = "<ul>";
    ofertas.forEach(oferta => {
        html += `<li>${oferta.hotel} - ${oferta.descuento} de descuento</li>`;
    });
    html += "</ul>";

    html += `
        <p style="margin-top:10px; font-style:italic;">
        Ponte en contacto con nosotros para obtener el código del descuento 
        y introdúcelo en la web oficial del hotel a la hora de hacer la reserva.
        </p>
    `;

    ofertasContainer.innerHTML = html;
    boton.textContent = "Ocultar ofertas";
}

/* -------------------------
   Funciones para contacto.html
--------------------------- */

function validarFormularioContacto(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const asunto = document.getElementById("asunto").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !email || !asunto || !mensaje) {
        alert("Por favor, complete todos los campos del formulario.");
        return false;
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        alert("Por favor, introduce un correo electrónico válido.");
        return false;
    }

    const mensajeExito = document.getElementById("mensajeExito");
    mensajeExito.textContent = "Mensaje enviado correctamente";
    mensajeExito.style.display = "block";

    setTimeout(() => {
        mensajeExito.style.display = "none";
    }, 5000);

    event.target.submit();
    return true;
}
