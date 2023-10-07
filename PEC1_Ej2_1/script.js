const formulario = document.getElementById("formulario");
const usuario = document.getElementById("Usuario");
const edad = document.getElementById("edad");
const email = document.getElementById("email");
const clave = document.getElementById("password");
const confirmaClave = document.getElementById("password2");

// Mostrar mensaje de error
function mostrarError(input, mensaje) {
    const campoFormulario = input.parentElement;
    campoFormulario.className = "formulario-control error";
    const small = campoFormulario.querySelector("small");
    small.innerText = mensaje;
}

// Mostrar esquema de diligenciamiento exitoso
function esquemaExito(input) {
    const campoFormulario = input.parentElement;
    campoFormulario.className = "formulario-control success";
}

/* // Validación de edad
function validarEdad(input) {
    if(isNaN(input.value) || input.value < 0 || input.value > 1000) {
        mostrarError(input, "Edad no válida, debe ser numérica entre 0 y 999");
    }
    else {
        esquemaExito(input);
    }   
} */

// Validación formato de email
function validarEmail(input) {
    const expresion = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(expresion.test(input.value.trim())) {
        esquemaExito(input);
    }
    else{
        mostrarError(input, "El formato de email es inválido");
    }
}

// Validación formato de contraseña
function validarPassword(input) {
    if (input.value.search(/[a-z]/) < 0) {
        mostrarError(input, "La contraseña debe contener letras minúsculas.");
    }
    else if (input.value.search(/[A-Z]/) < 0) {
        mostrarError(input, "La contraseña debe contener letras mayúsculas.");
    }
    else if (input.value.search(/[0-9]/) < 0) {
        mostrarError(input, "La contraseña debe contener dígitos numéricos.");
    }
    else if(input.value.search(/[\!\@\#\$\%\^\&\*\(\)\_\+\.\,\;\:\-]/) < 0) {
        mostrarError(input, "La contraseña debe tener caractéres especiales.");
    }
}

// Validación de campos requeridos
function campoRequerido(inputArray) {
    inputArray.forEach(function(input) {
        if(input.value.trim() === '') {
            mostrarError(input, `${obtenerCampo(input)} es requerido`);
        }
        else {
            esquemaExito(input);
        }
    });   
}

// Validación de longitud de caracteres en campo de formulario
function validarLongitudCaracteres(input, min, max) {
    if(input.value.length < min) {
        mostrarError(input, `${obtenerCampo(input)} debe contener mínimo ${min} caracteres`);
    }
    else if(input.value.length> max) {
        mostrarError(input, `${obtenerCampo(input)} no debe exceder los ${max} caracteres`);
    }
    else {
        esquemaExito(input);
    }
}

// Validar si un valor es numérico
function esNumerico(input) {      
    if(isNaN(input.value)) {
        mostrarError(input, `Este campo ${obtenerCampo(input)} debe ser numérico`);
    }
    else {
        esquemaExito(input);    
    }
}

// Validación rango numérico
function rangoNumerico(input, min, max) {
    if(input.value < min) {
        mostrarError(input, `El campo ${obtenerCampo(input)} debe ser mínimo ${min}`);
    }
    else if(input.value > max) {
        mostrarError(input, `El campo ${obtenerCampo(input)} no debe exceder la cantidad de ${max}`);
    }
    else {
        esquemaExito(input);
    }
}

// Validar concordancia de las contraseñas
function validarConcordanciaPassword(input1, input2) {
    if(input1.value !== input2.value) {
        mostrarError(input2, "Las contraseñas no concuerdan");
    }
}

// Obtener nombre de campo de formulario
function obtenerCampo(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Manejo de eventos
formulario.addEventListener("submit", function(e) {
    e.preventDefault();
    campoRequerido([usuario, edad, email, clave, confirmaClave]);

    validarLongitudCaracteres(usuario , 3, 15);
    validarLongitudCaracteres(clave , 8, Infinity);
    esNumerico(edad);
    rangoNumerico(edad, 0, 999);
    validarEmail(email);
    validarPassword(clave);   
    validarConcordanciaPassword(clave, confirmaClave);
});
