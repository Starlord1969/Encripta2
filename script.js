// Función para encriptar el texto
function btnEncriptar() {
    let texto = document.querySelector('.text-area').value;
    let textoEncriptado = encriptarTexto(texto);
    let mensajeArea = document.querySelector('.mensaje');
    mensajeArea.value = textoEncriptado;

    if (textoEncriptado) {
        mensajeArea.classList.add('con-texto');
    } else {
        mensajeArea.classList.remove('con-texto');
    }
}

function btnDesencriptar() {
    let texto = document.querySelector('.text-area').value;
    let textoDesencriptado = desencriptarTexto(texto);
    let mensajeArea = document.querySelector('.mensaje');
    mensajeArea.value = textoDesencriptado;

    if (textoDesencriptado) {
        mensajeArea.classList.add('con-texto');
    } else {
        mensajeArea.classList.remove('con-texto');
    }
}


// Función para desencriptar el texto
function btnDesencriptar() {
    let texto = document.querySelector('.text-area').value;
    let textoDesencriptado = desencriptarTexto(texto);
    document.querySelector('.mensaje').value = textoDesencriptado;
}

// Función para encriptar usando reglas simples
function encriptarTexto(texto) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    texto = texto.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(texto.includes(matrizCodigo[i][0])) {
            texto = texto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return texto;
}

// Función para desencriptar usando las mismas reglas en reversa
function desencriptarTexto(texto) {
    let matrizCodigo = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
    texto = texto.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(texto.includes(matrizCodigo[i][0])) {
            texto = texto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return texto;
}

// Función para copiar el texto encriptado/desencriptado
function copiarTexto() {
    let textoCopiar = document.querySelector('.mensaje');
    textoCopiar.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}

