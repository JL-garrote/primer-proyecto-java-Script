const boton = document.getElementById("boton");
const resultado = document.getElementById("resultado");
const mensaje = document.getElementById("mensaje");
const latidos = document.getElementById("latidos");
const horas = document.getElementById("sueño");

let nombre;
let edad;
let peso;
let altura;
let imc;

const fcr = 60;  
const intensidad = 0.7; 

boton.addEventListener("click", pedirDatos);

function pedirDatos() {
    nombre = prompt("¿Cuál es tu nombre?");
    edad = parseInt(prompt("¿Cuántos años tienes?"));
    peso = parseFloat(prompt("¿Cuál es tu peso en kg?"));
    altura = parseFloat(prompt("¿Cuál es tu altura en metros?"));

    if (isNaN(peso) || isNaN(altura) || isNaN(edad) || altura <= 0 || edad <= 0) {
        alert("Por favor, introduce valores válidos para edad, peso y altura.");
        return;
    }

    calcularIMC();
}

function calcularIMC() {
    imc = peso / (altura ** 2);
    let imcRedondeado = imc.toFixed(2);

    const fct = frecuenciaCardiacaObjetivo(edad, fcr, intensidad).toFixed(0); // redondeada

    mensaje.textContent =
        `Hola ${nombre}, gracias por confiar en nosotros.\n\n` +
        `Edad: ${edad} años\n` +
        `Peso: ${peso} kg\n` +
        `Altura: ${altura} m\n` +
        `Tu IMC es: ${imcRedondeado} (${clasificarIMC(imc)})`
    ;

    latidos.textContent =`Frecuencia cardíaca estimada al 70%: ${fct} latidos por minuto`;
    horas.textContent = `Te es recomendable dormir ${horasSueno()}`;
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

function frecuenciaCardiacaObjetivo(edad, fcr, intensidad) {
    const fcm = 220 - edad;
    return fcr + (fcm - fcr) * intensidad;
}

function horasSueno() {

    if(edad >= 14 || edad <= 17) {
        return "entre 8 a 10 horas"
    } else if (edad >= 18 || edad <= 25) {
        return "entre 7 a 9 horas"
    } else if (edad >= 26 || edad <= 64) {
        return "entre 7 a 9 horas"
    } else {
        return "entre 7 a 9 horas"
    }
}