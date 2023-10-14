const divisa_1 = document.getElementById("divisa-1");       // Variable para primer campo de divisa a convertir.
const cantidad_1 = document.getElementById("cantidad-1");   // Variable para cantidad a convertir.   
const divisa_2 = document.getElementById("divisa-2");       // Variable para divisa equivalente de conversión.
const cantidad_2 = document.getElementById("cantidad-2");   // Variable para cantidad equivalente de conversión.
const tasaCambio = document.getElementById("tasaCambio");   // Variable para valor de tasa de cambio.
const inverso = document.getElementById("inverso");         // Variable para botón de invertir divisas.

// Validar cantidades negativas
function cantidadDivisaNegativa() {
    if(cantidad_1.value < 0) {        
        window.alert("Las cantidades no deben ser negativas");
        cantidad_1.value = 0;
    }   
}

// Mostrar estado de espera
function mostrarEspera() {
    tasaCambio.innerHTML = "<img src=\img/process.png\ class=\proceso-img\>";   
}

// Buscar tipos de cambio y actualizar el DOM.
function calcular() {
    const currency1 = divisa_1.value;
    const currency2 = divisa_2.value;
    
    mostrarEspera();    
    fetch(`https://v6.exchangerate-api.com/v6/77698641023fb36ba5bdc2c7/latest/${currency1}`).then(res => res.json()).then(data =>{        
    const miTasa = data.conversion_rates[currency2];
    tasaCambio.innerText=`1 ${currency1} = ${miTasa} ${currency2}`;
    cantidad_2.value = (cantidad_1.value * miTasa).toFixed(2);
    });   
}

// Event Listeners
divisa_1.addEventListener("change", calcular);
cantidad_1.addEventListener("input", cantidadDivisaNegativa);
cantidad_1.addEventListener("input", calcular);
divisa_2.addEventListener("change", calcular);
cantidad_2.addEventListener("input", calcular);
inverso.addEventListener("click", () =>{
    const temp = divisa_1.value;
    divisa_1.value = divisa_2.value;
    divisa_2.value = temp;
    calcular();
});
calcular();