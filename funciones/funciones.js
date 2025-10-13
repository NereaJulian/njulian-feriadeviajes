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
// Filtrar destinos por tipo: ciudad, montaña, playa, cerca-playa, todos
function filtrarDestinos(tipo) {
    const destinos = document.querySelectorAll(".destino");
    destinos.forEach(destino => {
        const tipos = destino.dataset.tipo.split(" ");
        if (tipo === "todos" || tipos.includes(tipo)) {
            destino.style.display = "list-item";
        } else {
            destino.style.display = "none";
        }
    });

    // Resaltar botón activo
    const botones = document.querySelectorAll(".filtro button");
    botones.forEach(boton => {
        if (boton.textContent.toLowerCase().replace(/\s/g, '-') === tipo) {
            boton.classList.add("activo");
        } else {
            boton.classList.remove("activo");
        }
    });
}

// Inicializar botones de filtro al cargar la página
window.addEventListener("load", () => {
    const botones = document.querySelectorAll(".filtro button");
    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            const tipo = boton.textContent.toLowerCase().replace(/\s/g, '-');
            filtrarDestinos(tipo);
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
   Formulario de inscripción en eventos.html
--------------------------- */
function inicializarFormularioCharla() {
    const formulario = document.querySelector(".formulario-charla form");
    if (!formulario) return;

    // Crear div para mostrar mensajes
    const mensaje = document.createElement("div");
    mensaje.style.marginTop = "10px";
    mensaje.style.fontWeight = "bold";
    formulario.appendChild(mensaje);

    formulario.addEventListener("submit", function(e) {
        e.preventDefault(); // Evita recargar la página

        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();

        if (nombre === "" || email === "") {
            mensaje.style.color = "red";
            mensaje.textContent = "Por favor, rellena todos los campos.";
            return;
        }

        // Mostrar mensaje de éxito
        mensaje.style.color = "green";
        mensaje.textContent = "Te has inscrito correctamente a la charla";

        // Enviar datos a FormSubmit
        const tempForm = document.createElement("form");
        tempForm.action = formulario.action;
        tempForm.method = formulario.method;

        const nombreInput = document.createElement("input");
        nombreInput.type = "hidden";
        nombreInput.name = "nombre";
        nombreInput.value = nombre;
        tempForm.appendChild(nombreInput);

        const emailInput = document.createElement("input");
        emailInput.type = "hidden";
        emailInput.name = "email";
        emailInput.value = email;
        tempForm.appendChild(emailInput);

        // Campos ocultos de FormSubmit
        const nextInput = document.createElement("input");
        nextInput.type = "hidden";
        nextInput.name = "_next";
        nextInput.value = "https://nereajulian.github.io/njulian-feriadeviajes/eventos.html";
        tempForm.appendChild(nextInput);

        const captchaInput = document.createElement("input");
        captchaInput.type = "hidden";
        captchaInput.name = "_captcha";
        captchaInput.value = "false";
        tempForm.appendChild(captchaInput);

        document.body.appendChild(tempForm);
        tempForm.submit();
    });
}

window.addEventListener("load", inicializarFormularioCharla);

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
        { hotel: "Anantara Siam Bangkok Hotel", descuento: "20%", url: "https://www.anantara.com/en/siam-bangkok/offers/10-10-exclusive" },
        { hotel: "The Peninsula Tokyo", descuento: "15%", url: "https://lartisien.com/hotel/the-peninsula-tokyo" },
        { hotel: "The Plaza Hotel", descuento: "10%", url: "https://www.theplazany.com/" },
        { hotel: "Radisson Collection Hotel, Roma Antica", descuento: "18%", url: "https://www.radissonhotels.com/es-es/hoteles/radisson-collection-roma-antica" },
        { hotel: "The Nile Ritz-Carlton, El Cairo", descuento: "22%", url: "https://www.ritzcarlton.com/en/hotels/CAIRZ-the-nile-ritz-carlton-cairo/overview/" },
    ];

    let html = "<ul>";
    ofertas.forEach(oferta => {
        html += `<li><a href="${oferta.url}" target="_blank" style="color:blue;">${oferta.hotel}</a> - ${oferta.descuento} de descuento</li>`;
    });
    html += "</ul>";

    html += `
        <p style="margin-top:10px; font-style:italic;">
        Ponte en contacto con nosotros para obtener el código del descuento 
        y úsalo al hacer tu reserva en la web oficial del hotel.
        </p>
    `;

    ofertasContainer.innerHTML = html;
    boton.textContent = "Ocultar ofertas";
}

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
