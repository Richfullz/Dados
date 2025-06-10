/*Usamos queryselectos para coger los elementos class cubo y getElementById
el id mensaje que hemos en los divs del HTML */
const cubos = document.querySelectorAll(".cubo");
const mensaje = document.getElementById("mensaje");

/*Para que el dado este en un cubo aleatorio usaremos operadores matematicos
en este cado usamos Math.random() y Math.floor() para generar numeros del 1 al 3 */
Math.floor(Math.random() * cubos.length);
/*
Math.random():genera un numero aleatorio
Math.floor(Math.random() * cubos.length); 
funciona aunque cambie el numero de cubo id
 */

/////////////////////////

// cubos.forEach(cubo => {
//   cubo.addEventListener('click', function() {
//     // Aquí va la lógica cuando se hace clic
//   });
// });

/*Para que el usuario haga click en uno de los cubos y este responda si hemos acertado o no
usaremos el bucle forEach "escuchador"
cubos.ForEach() recorrera cada cubo
addEventListener('click', ....) ecucha el evento del click
 */

cubos.forEach((cubo) => {
  cubo.addEventListener("click", function () {
    const cuboId = parseInt(this.id.replace("cubo", ""));
    if (cuboId === dadoEnCubo) {
      this.textContent = "🎲";
      mensaje.textContent = "¡Acertaste!✨ El dado estaba aquí❤️";
      cubos.forEach((c) => c.classList.add("sin-clic"));
      setTimeout(iniciarJuego, 2000);
    } else {
      mensaje.textContent = "¡Fallaste!💀 El dado estaba en otro cubo😭";
      // Ocultar los demás cubos
      cubos.forEach((c, i) => {});
    }
    this.classList.add("oculto");
  });
});

/*
this.id.replace('cubo', '') extrae el numero id cubo clicado
parseInt() Convierte el texto en un número
mensaje.textContent cambia el texto del mensaje si aciertas o no cuando clickeas el cubo
this.textContent muestra un texto y añadimos el dado para que cuando se acierte muestre el icono del dado
tambien se le puede poner una imagen o cuando falle se muestre donde esta cogiendo el id donde se guardo el dado
*/

// setTimeout(iniciarJuego, 2000);

/*Reinicia el juego pasado 2 segundos */

/*Ocultar el cubo cuando se clickea*/

function iniciarJuego() {
  dadoEnCubo = Math.floor(Math.random() * 3) + 1;
  mensaje.textContent = "";
  cubos.forEach((cubo) => {
    cubo.textContent = "";
    cubo.classList.remove("oculto");
    cubo.classList.remove("sin-clic"); // Volver a permitir clics
  });
}

/*
dadoEnCubo = elige un nuevo cubo
mensaje.textContent = '' Limpia el mensaje
 */
iniciarJuego();
/*Ejecuta la función*/

/*
1- Selecciona elementos para interactuar con ellos.

2- Escucha eventos como clics.

3- Cambia el contenido de la página según lo que pase(Si acierta envia mensaje de ok y reinicia, sino se quita el cubo y tienes que eleguir otro).

4- Usa funciones para organizar el código y reutilizar lógica.

5- Usa variables para guardar información clave (como dónde está el dado).

6- Cuando aciertas: Muestra el dado en el cubo correcto, no podras seleccionar otros cubos y reinicia el juego.

6- Cuando fallas: oculta el cubo y tendras que buscar el correcto.

7- Al reiniciar: Limpias el contenido y muestras todos los cubos de nuevo.

*/
