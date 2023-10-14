const formulario = document.getElementById("formulario");   // Variable para formulario completo.
const usuario = document.getElementById("Usuario");         // Variable para valor usuario.
const edad = document.getElementById("edad");               // Variable para valor edad.
const email = document.getElementById("email");             // Variable para valor email.
const clave = document.getElementById("password");          // Variable para valor contraseña.
const confirmaClave = document.getElementById("password2"); // Variable para valor de confirmación de contraseña.
const botonRegistrar = document.getElementById("registrar") // Variable para botón de registro.
const camposDeEntrada = document.querySelectorAll('input'); // Variable para todas las entradas del formulario.


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

// Validación de edad
function validarEdad(input) {
    if (isNaN(input.value) || input.value < 0 || input.value > 1000) {
        mostrarError(input, "Edad no válida, debe ser numérica entre 0 y 999");
    } else {
        esquemaExito(input);
    }
}

// Validación formato de email
function validarEmail(input) {
    const expresion = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (expresion.test(input.value.trim())) {
        esquemaExito(input);
    } else {
        mostrarError(input, "El formato de email es inválido");
    }
}

// Validación formato de contraseña
function validarPassword(input) {
    if (input.value.search(/[a-z]/) < 0) {
        mostrarError(input, "La contraseña debe contener letras minúsculas.");
    } else if (input.value.search(/[A-Z]/) < 0) {
        mostrarError(input, "La contraseña debe contener letras mayúsculas.");
    } else if (input.value.search(/[0-9]/) < 0) {
        mostrarError(input, "La contraseña debe contener dígitos numéricos.");
    } else if (input.value.search(/[\!\@\#\$\%\^\&\*\(\)\_\+\.\,\;\:\-\`\~\=\{\}\"\[\]\<\>\?]/) < 0) {
        mostrarError(input, "La contraseña debe tener caractéres especiales.");
    }
}

// Validación de longitud de caracteres en campo de formulario
function validarLongitudCaracteres(input, min, max) {
    if (input.value.length<min) {
        mostrarError(input, `${obtenerCampo(input)} debe contener mínimo ${min} caracteres`);
    }
    else if(input.value.length>max) {
        mostrarError(input, `${
            obtenerCampo(input)
        } no debe exceder los ${max} caracteres`);
    } else {
        esquemaExito(input);
    }
}

// Agregar un event listener "click" a todos los campos de entrada
camposDeEntrada.forEach(function (input) {
    input.addEventListener("click", function () {
        validarCampoRequerido(input);
    });
});

// Validar concordancia de las contraseñas
function validarConcordanciaPassword(input1, input2) {
    if (input1.value !== input2.value) {
        mostrarError(input2, "Las contraseñas no concuerdan");        
    }
    else {
        esquemaExito(input2);
    }   
}

// Obtener nombre de campo de formulario
function obtenerCampo(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Función para validar un solo campo requerido
function validarCampoRequerido(input) {
    if (! input.parentElement.classList.contains('error')) {
        if (input.value.trim() === '') {
            mostrarError(input, `${
                obtenerCampo(input)
            } es requerido`);
        } else {
            esquemaExito(input);
        }
    }
}

// Añadir event listeners de entrada para validaciones de campos
usuario.addEventListener("input", function () {
    validarLongitudCaracteres(usuario, 3, 15);
    validarCampoRequerido(usuario);
});

edad.addEventListener("input", function () {    
    validarEdad(edad);    
    validarCampoRequerido(edad);
});

email.addEventListener("input", function () {
    validarEmail(email);
    validarCampoRequerido(email);
});

clave.addEventListener("input", function () {    
    validarLongitudCaracteres(clave, 8, Infinity);
    validarPassword(clave);
    validarCampoRequerido(clave);    
});

confirmaClave.addEventListener("input", function () {
    validarConcordanciaPassword(clave, confirmaClave);
    validarCampoRequerido(confirmaClave);       
});

// Añadir event listeners de entrada para campos requeridos, uan vez oprimido el botón Registrar
botonRegistrar.addEventListener("click", function (event) {
    event.preventDefault();          // Evita el envío del formulario por defecto
    validarCampoRequerido(usuario);
    validarCampoRequerido(edad);
    validarCampoRequerido(email);
    validarCampoRequerido(clave);
    validarCampoRequerido(confirmaClave);           
});     
