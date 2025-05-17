# primer-proyecto-java-Script

Fase 2: Mostrar todo en la web
En esta fase construirás una página web completa donde se muestre el perfil de salud del
usuario a partir de los cálculos realizados en la fase 1. La interacción con el usuario y la
presentación de resultados se realizará mediante manipulación del DOM y eventos con
JavaScript. El objetivo será crear una interfaz web donde el usuario pueda introducir sus
datos al pulsar un botón y visualizar los resultados directamente en pantalla de forma clara
y visual.

Estructura HTML mínima
• Un <header> con el título de la web.
• Un <main> con:
o Un botón con el texto “Iniciar análisis de salud”.
o Un contenedor vacío (por ejemplo: <div id="contenido">) e inicialmente
invisible, donde se mostrarán los resultados generados dinámicamente con
JavaScript.

• Un <footer> con el texto: Realizado por Nombre1 y Nombre2.
Interacción y flujo de la página

1. Al pulsar el botón “Iniciar análisis de salud” (usa el evento "click" sobre el botón) o Se recogen los datos mediante prompt():
1. Nombre
2. Edad
3. Peso (kg)
4. Altura (en metros)

1. Un párrafo con un saludo personalizado usando el nombre del
usuario.

2. Un párrafo donde se muestren los datos de edad, peso y altura del
usuario.

3. Un párrafo con la frecuencia cardíaca máxima estimada que muestre
algo como: "Tu frecuencia cardíaca máxima estimada es: X ppm". Usa
la función de la fase 1 para calcularla.

4. Un párrafo con la recomendación de horas de sueño que muestre
algo como: "Tus horas de sueño recomendadas son X". Usa la función
de la fase 1 para calcularlas.

5. Un párrafo con el TMB (metabolismo basal) que muestre algo como:
"Tu cuerpo necesita aproximadamente X kcal diarias en reposo." Usa
la función de la fase 1 para calcularla.

6. Un párrafo con el IMC calculado y su clasificación, donde se muestre
algo como: "Tu IMC es X. Tienes Y." Usa las funciones de la fase 1 para
calcularlo.

7. Un párrafo introductorio a la tabla posterior que muestre algo como:
"Esta tabla muestra el IMC simulado para pesos entre -4 y +4 kg
respecto a tu peso actual."

8. Una tabla de simulación de IMC, que muestra cómo varía el IMC del
usuario si su peso cambiara ±4 kg respecto a su peso actual, en
intervalos de 2 kg.

• Esta tabla se genera con un bucle for, y debe estar contenida
dentro de una función dedicada (por ejemplo,

mostrarTablaIMC(peso, altura)). Dentro de esta función tendrás
que usar también la función de cálculo del IMC para cada peso
simulado. La función devolverá la tabla ya formada, lista para
agregarla al contenedor.

2. Si el usuario pulsa el botón otra vez:
o El contenido anterior se borra.
o Se vuelve a pedir la información.
o Se recalculan los datos y se muestra todo actualizado.

Consideraciones obligatorias
• Todos los datos de salud que se muestran en pantalla deben generarse con

JavaScript manipulando el DOM.
• Cada cálculo debe realizarse mediante su función correspondiente.
• Se debe usar .createElement, .textContent o .innerHTML, y .append() para construir
el contenido.
• Recuerda que el contenedor vacío está inicialmente invisible. Tendrás que
mostrarlo una vez se haga click en el botón y se hagan los cálculos.
• La presentación visual de la página también será valorada. No es necesario un
diseño avanzado, pero sí se espera una apariencia limpia, organizada y coherente.
Utiliza un archivo style.css para aplicar estilos que ayuden a que la información sea
clara y esté bien estructurada.