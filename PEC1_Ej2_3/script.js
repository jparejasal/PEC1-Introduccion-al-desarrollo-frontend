const listaDivisas = document.getElementById("listaDivisas");               // Variable para listado de divisas.
const contenedor = document.querySelector('.container');                    // Variable para elementos de la clase .container.
const sillas = document.querySelectorAll('.fila .silla:not(.ocupada)');     // Variable para sillas seleccionables.
const cantSillas = document.getElementById("contador");                     // Variable para contador de sillas seleccionadas.
const precioTotal = document.getElementById("total");                       // Variable para precio total de taquilla.
const peliculas = document.getElementById("listaPeliculas");                // Variable para listado de películas.
const precioTaquillaSpan = document.getElementById("precioTaquilla");       // Variable para etiqueta de divisa equivalente.

// Agrega un evento para detectar cambios en la película seleccionada
listaPeliculas.addEventListener("change", function () {
    calcularDivisaTaquilla();
    actualizarSeleccion();
});

// Agrega un evento para detectar cambios en la divisa seleccionada
listaDivisas.addEventListener("change", function () {
    calcularDivisaTaquilla();
    actualizarSeleccion();
});

// Cargar interfaz gráfica de usuario, con información axtualizada.
poblarInterfazUI();

// Actualizar contador de sillas seleccionadas
function actualizarSeleccion() {
    const sillasSeleccionadas = document.querySelectorAll('.fila .silla.seleccionada');

    const indiceSillas = [... sillasSeleccionadas].map(silla => [... sillas].indexOf(silla));
    localStorage.setItem("sillasSeleccionadas", JSON.stringify(indiceSillas));

    cantSillas.innerText = sillasSeleccionadas.length;

    // Llama a la función calcularDivisaTaquilla y actualiza el precio en divisa y la divisa
    calcularDivisaTaquilla().then(result => { // Calcula el precio total en la divisa seleccionada
        const precioTotalDivisa = result.precioEnDivisa * sillasSeleccionadas.length;
        const divisa = result.divisa;

        // Muestra el precio total en el divisa seleccionada en el elemento precioTotal
        precioTotal.innerText = precioTotalDivisa.toFixed(2) + " " + divisa;
    }).catch(error => {
        console.error("Error al calcular la divisa: " + error);
    });
}

// Actualizar interfaz de usuario con información almancenada localmente.
function poblarInterfazUI() {
    const sillasSeleccionadas = JSON.parse(localStorage.getItem("sillasSeleccionadas"));

    if (sillasSeleccionadas !== null && sillasSeleccionadas.length > 0) {
        sillas.forEach((silla, indice) => {
            if (sillasSeleccionadas.indexOf(indice) > -1) {
                silla.classList.add("seleccionada");
            }
        });
    }
    const indicePeliculaSeleccionada = localStorage.getItem("peliculaSeleccionada");
    if (indicePeliculaSeleccionada !== null) {
        peliculas.selectedIndex = indicePeliculaSeleccionada;
    }
}

// Convertir precio taquilla según divisa
function calcularDivisaTaquilla() {
    const currency1 = listaDivisas.value;
    const currency2 = "USD";

    // Obtiene el precio de la película seleccionada (value del select)
    const precioPelicula = parseInt(listaPeliculas.value);

    // Hace la solicitud a la API de tasas de cambio y retorna la promesa
    return fetch(`https://v6.exchangerate-api.com/v6/77698641023fb36ba5bdc2c7/latest/${currency1}`).then(res => res.json()).then(data => {
        const miTasa = data.conversion_rates[currency2];

        // Calcula el precio en la divisa y lo muestra en el span
        const precioEnDivisa = (precioPelicula * miTasa).toFixed(2);
        precioTaquillaSpan.textContent = "Precio de la taquilla: " + precioEnDivisa + " " + currency1;

        // Retorna un objeto con el precio en divisa y la divisa
        return {precioEnDivisa, divisa: currency1};
    });
}

// Guardar datos de película y precio
function guardarDatosPelicula(indicePelicula, precioPelicula) {
    localStorage.setItem("peliculaSeleccionada", indicePelicula);
    localStorage.setItem("precioPeliculaSeleccionada", precioPelicula);
}

// Selección de película
peliculas.addEventListener("change", e => {
    precioTaquilla = + e.target.value;

    precioTaquillaSpan.textContent = "Precio de la taquilla: " + precioTaquilla;

    guardarDatosPelicula(e.target.selectedIndex, e.target.value);
    actualizarSeleccion();
});

// Selección de sillas
contenedor.addEventListener("click", e => {
    if (e.target.classList.contains('silla') && !e.target.classList.contains('ocupada')) {
        e.target.classList.toggle('seleccionada');
    }
    actualizarSeleccion();
});

// Conteo y datos totales
actualizarSeleccion();
