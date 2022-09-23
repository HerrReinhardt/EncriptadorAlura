const encriptarArea = document.querySelector(".encriptar-area");
const desencriptarArea = document.querySelector(".desencriptar-area");
let arrayVocales = [ ["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];

function encriptador(textoAEncriptar){
   textoAEncriptar = textoAEncriptar.toLowerCase();

   for(let posicion = 0; posicion < arrayVocales.length; posicion++) {

    if(textoAEncriptar.includes(arrayVocales[posicion][0])){
        textoAEncriptar = textoAEncriptar.replaceAll(arrayVocales[posicion][0],arrayVocales[posicion][1]);

        }
   }
   return textoAEncriptar;
}

function desencriptador(textoADesencriptar) {
    textoADesencriptar = textoADesencriptar.toLowerCase();

    for(let posicion = 0; posicion < arrayVocales.length;posicion++){

        if(textoADesencriptar.includes(arrayVocales[posicion][1])) {
           textoADesencriptar = textoADesencriptar.replaceAll(arrayVocales[posicion][1],arrayVocales[posicion][0]);
        }
    }
    return textoADesencriptar
}

function botonDeEncriptar() {
    const textoEncriptado = encriptador(encriptarArea.value);
    desencriptarArea.value = textoEncriptado;
    encriptarArea.value = "";
}

function botonDeDesencriptar() {
    const textoEncriptado = desencriptador(encriptarArea.value);
    desencriptarArea.value = textoEncriptado;
}

function botonDeCopiar() {
    desencriptarArea.select()
    navigator.clipboard.writeText(desencriptarArea.value);
    desencriptarArea.value = "Texto Copiado"
}