const listaDivisas = document.getElementById("listaDivisas");
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

//
function actualizarDivisa() {    
    const divisa =listaDivisas.selectedIndex;
    const cartelera = peliculas.querySelector("option");
    
    const texto= peliculas.getElementsByTagName("option")[divisa].text;
    cartelera.innerText = "red";
    
    
}

// Convertir precio taquilla según divisa
function calcularDivisaTaquilla() {
    const divisa = listaDivisas.value;
    const tarifasCambiarias = peliculas.querySelectorAll("option").values;    

    fetch(`https://v6.exchangerate-api.com/v6/77698641023fb36ba5bdc2c7/latest/${divisa}`).then(res => res.json()).then(data =>{        
    const miTasa = data.conversion_rates[divisa];
    
    for(let i=0; i < tarifasCambiarias.length; i++) {
        const nuevaTarifa = (tarifasCambiarias[i].value * miTasa).toFixed(2);
        tarifasCambiarias[i].innerText = nuevaTarifa;
    }
   
    });  
}

// Guardar datos de película y precio
function guardarDatosPelicula(indicePelicula, precioPelicula) {
    localStorage.setItem("peliculaSeleccionada", indicePelicula);
    localStorage.setItem("precioPeliculaSeleccionada", precioPelicula);
}

// Event Listeners

// Selección de divisa de pago.
listaDivisas.addEventListener("change", calcularDivisaTaquilla());
    



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
