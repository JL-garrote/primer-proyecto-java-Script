const boton = document.getElementById("boton");
const resultado = document.getElementById("resultado");
const mensaje = document.getElementById("mensaje");

let nombre;
let edad;
let peso;
let altura;

let imc;

boton.addEventListener("click", pedirDatos);

function pedirDatos() {
    nombre = prompt("¿Cuál es tu nombre?");
    edad = prompt("¿Cuántos años tienes?");
    peso = parseFloat(prompt("¿Cuál es tu peso en kg?"));
    altura = parseFloat(prompt("¿Cuál es tu altura en metros?"));

    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        alert("Por favor, introduce valores válidos para peso y altura.");
        return;
    }

    calcularIMC();
}

function calcularIMC() {
    imc = peso / (altura ** 2);
    let imcRedondeado = imc.toFixed(2);

    mensaje.textContent = `Hola ${nombre}, tienes ${edad} años. Tu IMC es: ${imcRedondeado} (${clasificarIMC(imc)})`;
    resultado.style.display = "block";
}

function clasificarIMC(imc) {
    if (imc < 18.5) {
        return "Bajo peso";
    } else if (imc < 24.9) {
        return "Peso normal";
    } else if (imc < 29.9) {
        return "Sobrepeso";
    } else {
        return "Obesidad";
    }
}
