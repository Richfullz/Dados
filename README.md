# ¿Donde esta el Dado?
### ![image](https://github.com/user-attachments/assets/4b15bf77-8bab-48a8-8c37-7ac1820443fb)

## Este proyecto se a creado con HTML5, CSS3, JS
## Es un juego sencillo en el que tienes que pulsar uno de los 3 cubos y tienes que encontrar el dado que estara dentro de uno de ellos, al pulsarlo se activara un mensaje avisandote de si lo encontrastes o no

## Para emepezar cree una estructura HTML5 en el que cre un titulo y un texto y 3 divs que son los cubos y otro div para los mensajes
### ![image](https://github.com/user-attachments/assets/c0a89c58-dc5f-4505-b9ef-f6bf464f9aac)

## Despues cree estilos CSS para dar forma y diseño ala estructura HTML
### ![image](https://github.com/user-attachments/assets/d1f4e1ca-1d82-41b7-9f18-4704a6ae0a21)
### ![image](https://github.com/user-attachments/assets/9fee6c8b-5e45-45e5-b16f-4d529f90a1b8)
 
## Luego he creado una lógica para activar los cubos y los mensajes a través de bucle forEach y el Dom con JS
## Primero use querySelectorAll para coger todos los elementos class con el nombre cubo y getElementById con el identificador Id mensaje que creamos en nuestro HTML5
## luego para crear un cubo aleatorio use operadores matematicos con Math.floor(redondeado la variable al mas bajo) y dentro de floor despues use Math.random(genera números aleatorios) y lo multiplico por
## lenght (usa determinados números de elementos en un array, características de números en un string o números de argumentos pasandole una función).
## Luego creo un bucle foreach en el que cojo los datos de cubos y creo un nuevo dato llamado cubo y le añado el evento click que me haga una función, dentro de esta  creo una constante nueva de cubo id en 
## le convierto el texto en un numero a través de un parseInt y a ese objeto le remplazo su id cubo cuando lo he clicado =>const cuboId = parseInt(this.id.replace("cubo", ""));
## ahora creo un bucle if else que cuando clicke si he acertado me salga un mensaje que encontre el dado y no me deja pulsar los otros dos hasta que reincie de nuevo el juego, en caso constrario me saldrá
## un mensaje nuevo que falle y tendre que seleccionar los otros dos hasta encontrar el cubo y una vez seleccionado este, no se puede volver a seleccionar(desaparece).
## una vez finalizado este bucle, creo una funcion para que se incie el juego una vez tengamos el dado.
## para esto vuelvo a meter las operaciones matematicas con floor y random =>dadoEnCubo = Math.floor(Math.random() * 3) + 1; (0,1,2), el mensaje lo dejamos vacio como si no hubiese pasado nada y los 
## quitamos.
## estilos oculto y sin click para que podamos volver a jugar normal.
## para hacer funcionar o aplicar esta funcion es necesario crear inciarjuego(nombre de la funcion)

# Objetivos del proyecto o del funcionamiento
## 1- Selecciona elementos para interactuar con ellos.
## 2- Escucha eventos como clics.
## 3- Cambia el contenido de la página según lo que pase(Si acierta envia mensaje de ok y reinicia, sino se quita el cubo y tienes que eleguir otro).
## 4- Usa funciones para organizar el código y reutilizar lógica.
## 5- Usa variables para guardar información clave (como dónde está el dado).
## 6- Cuando aciertas: Muestra el dado en el cubo correcto, no podras seleccionar otros cubos y reinicia el juego.
## 6- Cuando fallas: oculta el cubo y tendras que buscar el correcto.
## 7- Al reiniciar: Limpias el contenido y muestras todos los cubos de nuevo.

# Codigo JS
## ![image](https://github.com/user-attachments/assets/cace5296-83ea-485e-9fc6-78f37ddcf5da)
## ![image](https://github.com/user-attachments/assets/9272a53b-55d0-4cc0-8546-47a46e966685)


