const contenedor = document.querySelector('.container');
const sillas = document.querySelectorAll('.fila .silla:not(.ocupada)');
const cantSillas = document.getElementById("contador");
const precioTotal = document.getElementById("total");
const peliculas = document.getElementById("listaPeliculas");

poblarInterfazUI();

let precioTaquilla = +peliculas.value;



// Actualizar contador de sillas seleccionadas
function actualizarSeleccion() {
    const sillasSeleccionadas = document.querySelectorAll('.fila .silla.seleccionada');

    const indiceSillas = [...sillasSeleccionadas].map(silla => [...sillas].indexOf(silla));
    localStorage.setItem("sillasSeleccionadas", JSON.stringify(indiceSillas));

    cantSillas.innerText = sillasSeleccionadas.length;
    precioTotal.innerText = sillasSeleccionadas.length * precioTaquilla;
}

// Actualizar interfaz de usuario con información almancenada localmente.
function poblarInterfazUI() {
    const sillasSeleccionadas = JSON.parse(localStorage.getItem("sillasSeleccionadas"));

    if(sillasSeleccionadas !== null && sillasSeleccionadas.length > 0) {
        sillas.forEach((silla, indice) => {
            if(sillasSeleccionadas.indexOf(indice) > -1) {
                silla.classList.add("seleccionada");
            }
        });
    }

    const indicePeliculaSeleccionada = localStorage.getItem("peliculaSeleccionada");
    if(indicePeliculaSeleccionada !== null) {
        peliculas.selectedIndex = indicePeliculaSeleccionada;
    }
}

// Guardar datos de película y precio
function guardarDatosPelicula(indicePelicula, precioPelicula) {
    localStorage.setItem("peliculaSeleccionada", indicePelicula);
    localStorage.setItem("precioPeliculaSeleccionada", precioPelicula);
}

// Event Listeners
// Selección de película
peliculas.addEventListener("change", e => {
    precioTaquilla = +e.target.value;
    guardarDatosPelicula(e.target.selectedIndex ,e.target.value);
    actualizarSeleccion();
} );

// Selección de sillas
contenedor.addEventListener("click", e =>{
    if(e.target.classList.contains('silla') && !e.target.classList.contains('ocupada')) {
        e.target.classList.toggle('seleccionada');
    }
    actualizarSeleccion();
});

// Conteo y datos totales
actualizarSeleccion();
