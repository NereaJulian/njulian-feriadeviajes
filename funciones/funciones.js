/* ========================= 
   funciones.js
   Funciones JS para todas las páginas
============================ */

/* -------------------------
   Funciones para index.html
--------------------------- */
function mostrarMensajeBienvenida() {
    const mensajeDiv = document.getElementById("mensajeBienvenida");
    if (!mensajeDiv) return;

    mensajeDiv.textContent = "¡Bienvenida a la web de la Feria de Viajes!";
    mensajeDiv.classList.add("show");

    setTimeout(() => {
        mensajeDiv.classList.remove("show");
    }, 8000);
}

window.addEventListener("load", mostrarMensajeBienvenida);

/* -------------------------
   Funciones para destinos.html
--------------------------- */
// Filtrar destinos por tipo: ciudad, montaña, playa, todos
function filtrarDestinos(tipo) {
    const destinos = document.querySelectorAll(".destino");
    destinos.forEach(destino => {
        if (tipo === "todos" || destino.dataset.tipo === tipo) {
            destino.style.display = "list-item";
        } else {
            destino.style.display = "none";
        }
    });
}

// Inicializar botones de filtro al cargar la página
window.addEventListener("load", () => {
    const filtros = document.querySelectorAll(".filtro-destino button");
    filtros.forEach(boton => {
        boton.addEventListener("click", () => {
            filtrarDestinos(boton.dataset.tipo);
        });
    });
});

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

    if (ofertasContainer.innerHTML.trim() !== "") {
        ofertasContainer.innerHTML = "";
        boton.textContent = "Mostrar ofertas de hoteles hoy";
        return;
    }

    const ofertas = [
        { hotel: "Hotel Anantara", descuento: "20%", url: "https://www.anantara.com/en/siam-bangkok/offers/10-10-exclusive" },
        { hotel: "The Peninsula Tokyo", descuento: "15%", url: "https://www.lartisien.com/hotel/the-peninsula-tokyo" },
        { hotel: "The Plaza Hotel", descuento: "10%", url: "https://www.theplazany.com/" },
        { hotel: "Hotel W Barcelona", descuento: "12%", url: "https://www.marriott.com/en-us/hotels/bcnwh-w-barcelona/overview/" },
        { hotel: "Roma Antica Suites", descuento: "18%", url: "https://www.radissonhotels.com/es-es/hoteles/radisson-collection-roma-antica" },
        { hotel: "Ritz Paris", descuento: "22%", url: "https://www.ritzparis.com/" }
    ];

    let html = "<ul>";
    ofertas.forEach(oferta => {
        html += `<li><a href="${oferta.url}" target="_blank" style="color:blue;">${oferta.hotel}</a> - ${oferta.descuento} de descuento</li>`;
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

// Inicializar texto del botón de hoteles
window.addEventListener("load", () => {
    const boton = document.querySelector("button[onclick='mostrarOfertasHoteles()']");
    if (boton) {
        boton.textContent = "Mostrar ofertas de hoteles hoy";
    }
});

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
