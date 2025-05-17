const boton = document.getElementById("boton");
const resultado = document.getElementById("resultado");
const mensaje = document.getElementById("mensaje");
const latidos = document.getElementById("latidos");
const horas = document.getElementById("sueño");
const tMb = document.getElementById("tmb");
const tablaIMC = document.getElementById("tabla-imc");

let nombre, edad, peso, altura, imc, sexo;

const fcr = 60;
const intensidad = 0.7;

boton.addEventListener("click", pedirDatos);

function pedirDatos() {

    mensaje.textContent = "";
    latidos.textContent = "";
    horas.textContent = "";
    tMb.textContent = "";
    tablaIMC.innerHTML = ""; 

    nombre = prompt("¿Cuál es tu nombre?");
    sexo = prompt("¿Cuál es tu sexo? (hombre/mujer)").toLowerCase();
    edad = parseInt(prompt("¿Cuántos años tienes?"));
    peso = parseFloat(prompt("¿Cuál es tu peso en kg?"));
    altura = parseFloat(prompt("¿Cuál es tu altura en metros?"));

    if (
        isNaN(peso) || isNaN(altura) || isNaN(edad) || altura <= 0 || edad <= 0 ||
        (sexo !== "hombre" && sexo !== "mujer")
    ) {
        alert("Por favor, introduce valores válidos para sexo, edad, peso y altura.");
        return;
    }

    calcularIMC();
}

function calcularIMC() {
    imc = peso / (altura ** 2);
    let imcRedondeado = imc.toFixed(2);
    const fct = frecuenciaCardiacaObjetivo(edad, fcr, intensidad).toFixed(0);
    const tmbValor = calcularTMB(sexo, peso, altura * 100, edad).toFixed(2);

    mensaje.textContent =
        `Hola ${nombre}, gracias por confiar en nosotros.\n\n` +
        `Edad: ${edad} años\n` +
        `Peso: ${peso} kg\n` +
        `Altura: ${altura} m\n` +
        `Tu IMC es: ${imcRedondeado} (${clasificarIMC(imc)})`;

    latidos.textContent = `Frecuencia cardíaca estimada al 70%: ${fct} latidos por minuto`;
    horas.textContent = `Te es recomendable dormir ${horasSueno()}.`;
    tMb.textContent = `Tu cuerpo necesita aproximadamente ${tmbValor} kcal diarias en reposo.`;

    mostrarTablaIMC(peso, altura);

    resultado.style.display = "block";
}

function mostrarTablaIMC(pesoBase, altura) {
    tablaIMC.style.marginTop = "1rem";
    tablaIMC.border = "1";

    const encabezado = document.createElement("tr");
    encabezado.innerHTML = "<th>Peso (kg)</th><th>IMC</th><th>Clasificación</th>";
    tablaIMC.appendChild(encabezado);

    for (let delta = -4; delta <= 4; delta += 2) {
        const pesoSimulado = pesoBase + delta;
        const imcSimulado = pesoSimulado / (altura ** 2);
        const clasificacion = clasificarIMC(imcSimulado);

        const fila = document.createElement("tr");
        fila.innerHTML = `<td>${pesoSimulado.toFixed(1)}</td><td>${imcSimulado.toFixed(2)}</td><td>${clasificacion}</td>`;
        tablaIMC.appendChild(fila);
    }
}

function clasificarIMC(imc) {
    if (imc < 18.5) return "Bajo peso";
    if (imc < 24.9) return "Peso normal";
    if (imc < 29.9) return "Sobrepeso";
    return "Obesidad";
}

function frecuenciaCardiacaObjetivo(edad, fcr, intensidad) {
    const fcm = 220 - edad;
    return fcr + (fcm - fcr) * intensidad;
}

function horasSueno() {
    if (edad >= 14 && edad <= 17) return "entre 8 a 10 horas";
    if (edad >= 18 && edad <= 25) return "entre 7 a 9 horas";
    if (edad >= 26 && edad <= 64) return "entre 7 a 9 horas";
    return "entre 7 a 8 horas";
}

function calcularTMB(sexo, peso, alturaCm, edad) {
    if (sexo === "hombre") {
        return 88.36 + (13.4 * peso) + (4.8 * alturaCm) - (5.7 * edad);
    } else if (sexo === "mujer") {
        return 447.6 + (9.2 * peso) + (3.1 * alturaCm) - (4.3 * edad);
    } else {
        throw new Error("Sexo no válido.");
    }
}