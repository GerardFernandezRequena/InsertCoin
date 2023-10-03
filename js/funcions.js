$(document).ready(function () {

    // Obtiene el ancho del documento y le resta 200 unidades.
    let ancho = $(document).width() - 200;

    // Obtiene el alto del documento y le resta 300 unidades.
    let alto = $(document).height() - 300;

    // Selecciona el elemento HTML con el ID "moneda" y aplica una animación.
    $("#moneda").animate({ top: '420px' }, 3000, () => {
        // Cuando la animación se completa (después de 3 segundos),
        // cambia la fuente de la imagen del elemento con el ID "hucha"
        // para que muestre una imagen diferente de una alcancía.
        $("#hucha").attr("src", "images/piggy-bank-2.svg");
    });


    // Selecciona todos los elementos <li> que están dentro de un <ul> dentro de un elemento <nav>.
    $("nav ul li").hover(function () {
        // Cuando el puntero del mouse entra en un elemento <li>...
        // ...alterna (añade o quita) las clases CSS "navOptionHover" y "navOption" en el elemento actual 
        // (<this> se refiere al elemento <li> en el que se activó el evento hover).
        $(this).toggleClass("navOptionHover navOption");
    });



    // Se selecciona el elemento con el ID "nuevo" y se le asigna un manejador de eventos cuando se hace clic en él.
    $("#nuevo").on("click", function () {
        // Se oculta el elemento con el ID "formulario" cuando se hace clic en "#nuevo".
        $("#formulario").hide();
        // Se muestra el elemento con el ID "formulario2" cuando se hace clic en "#nuevo".
        $("#formulario2").show();
    });

    // Selecciona todos los elementos de entrada y agrega un controlador de eventos para el evento de clic
    $("input").on("click", function (e) {
        // Establece el atributo "placeholder" del elemento de entrada actual en una cadena vacía
        $(this).attr("placeholder", "");
    });

    // Asigna un evento "blur" a todos los elementos "input" en la página
    $("input").blur((e) => {
        // Obtiene el valor del campo de entrada actual
        const inputValue = $(e.currentTarget).val();
        // Obtiene el ID del campo de entrada actual
        const inputId = e.currentTarget.id;
        // Encuentra el elemento de etiqueta correspondiente al campo de entrada actual
        const label = $("#label-" + inputId);

        // Si el valor del campo de entrada no está vacío
        if (inputValue !== "") {
            // Hace visible la etiqueta
            label.css("visibility", "visible");
        } else {
            // Oculta la etiqueta
            label.css("visibility", "hidden");
            // Establece el atributo "placeholder" del campo de entrada actual con el contenido de la etiqueta
            $(e.currentTarget).attr("placeholder", label.html());
        }
    });


    // La función toma un argumento email, que se supone que es una cadena 
    // que representa una dirección de correo electrónico
    function isEmail(email) {
        // Expresión regular para validar un correo electrónico
        let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        // Utiliza test() para verificar si el correo electrónico cumple con el patrón
        return regex.test(email);
    }

    // Selecciona el elemento con el ID "entrarF" y agrega un controlador de eventos para el clic.
    $("#entrarF").on('click', function (e) {

        // Obtiene el elemento con el ID "usernameF" y lo almacena en la variable "username".
        let username = $("#usernameF");

        // Obtiene el elemento con el ID "passF" y lo almacena en la variable "pass".
        let pass = $("#passF");

        // Obtiene el elemento con el ID "repassF" y lo almacena en la variable "repass".
        let repass = $("#repassF");

        // Obtiene el elemento con el ID "email" y lo almacena en la variable "email".
        let email = $("#email");

        // Obtiene el elemento con el ID "span" y lo almacena en la variable "span".
        let span = $("#span");

        // Comprueba si el campo de nombre de usuario está vacío.
        if (username.val() === "") {
            // Coloca el foco en el campo de nombre de usuario.
            username.focus();
            // Establece el contenido del elemento "span" con un mensaje de error.
            span.html("Error!! No hay usuario.");
        } else if (pass.val() === "") {
            // Comprueba si el campo de contraseña está vacío.
            // Coloca el foco en el campo de contraseña.
            pass.focus();
            // Establece el contenido del elemento "span" con un mensaje de error.
            span.html("Error!! No hay contraseña.");
        } else if (repass.val() === "") {
            // Comprueba si el campo de confirmación de contraseña está vacío.
            // Coloca el foco en el campo de confirmación de contraseña.
            repass.focus();
            // Establece el contenido del elemento "span" con un mensaje de error.
            span.html("Error!! Debes confirmar la contraseña.");
        } else if (email.val() === "" || !isEmail(email.val())) {
            // Comprueba si el campo de correo electrónico está vacío o no es un correo electrónico válido.
            // Coloca el foco en el campo de correo electrónico.
            email.focus();
            // Establece el contenido del elemento "span" con un mensaje de error.
            span.html("Error!! El correo electrónico no es válido o está vacío.");
        } else {
            // Si no hay errores, borra el contenido del elemento "span".
            span.html("");
        }

        // Evita que el formulario se envíe y detiene la propagación del evento de clic.
        e.preventDefault();
        e.stopPropagation();
    });


    // Cuando se hace clic en el elemento con el ID "refPuzzle"...
    $("#refPuzzle").on('click', function (e) {
        // Ocultar los elementos con los ID "acceso" y "pictionary".
        $("#acceso, #pictionary").hide();

        // Mostrar el elemento con el ID "puzzles".
        $("#puzzles").show();
    });

    // Este bloque de código se ejecuta cuando se hace clic en el elemento con el id "refPictionary".
    $("#refPictionary").on('click', function (e) {
        // Oculta los elementos con los ids "acceso" y "puzzles".
        $("#acceso, #puzzles").hide();
        // Muestra el elemento con el id "pictionary".
        $("#pictionary").show();
    });


    // Definimos la cantidad total de piezas en el rompecabezas
    const cantidadPiezas = 16;

    // Iniciamos un bucle que se ejecutará 16 veces (una vez por cada pieza)
    for (let i = 1; i <= cantidadPiezas; i++) {
        // Generamos una posición X aleatoria dentro de un área definida (ancho del rompecabezas)
        const posicionX = Math.random() * ancho;

        // Generamos una posición Y aleatoria dentro de un área definida (alto del rompecabezas)
        const posicionY = Math.random() * alto;

        // Creamos un nuevo elemento <img> utilizando jQuery con las siguientes propiedades:
        const nuevaPieza = $("<img/>", {
            "class": "piezaPuzzle",              // Asignamos la clase "piezaPuzzle" al elemento
            "id": `piezaPuzzle${i}`,            // Asignamos un ID único basado en el valor de 'i'
            "src": `images/puzzle/puzzle${i}.jpg`, // Asignamos la fuente de la imagen
            "style": `top: ${posicionY}px; left: ${posicionX}px;` // Establecemos la posición del elemento en la página
        });

        // Agregamos la nueva pieza al elemento con el ID "puzzles" en el DOM
        $("#puzzles").append(nuevaPieza);

        // Hacemos que todas las piezas con la clase "piezaPuzzle" sean arrastrables (drag-and-drop)
        $(".piezaPuzzle").draggable();
    }

    // Selecciona todos los elementos con la clase CSS "casilla" y hace que sean droppables (pueden recibir elementos arrastrados sobre ellos).
    $(".casilla").droppable({
        // Este es el evento que ocurre cuando se suelta un elemento arrastrado sobre una casilla.
        drop: function (event, ui) {
            // Almacena la casilla actual en la variable "casilla".
            let casilla = $(this);
            // Almacena la pieza arrastrada en la variable "pieza".
            let pieza = ui.draggable;

            // Obtiene el número de casilla como un entero a partir del atributo "id" de la casilla, eliminando cualquier carácter que no sea un número.
            let numcasilla = parseInt(casilla.attr("id").replace(/[^0-9.]/g, ""));
            // Obtiene el número de pieza de manera similar, a partir del atributo "id" de la pieza.
            let numpieza = parseInt(pieza.attr("id").replace(/[^0-9.]/g, ""));

            // Comprueba si el número de casilla es igual al número de pieza.
            if (numcasilla === numpieza) {
                // Calcula la posición superior y izquierda de la casilla para mover la pieza allí.
                let topOffset = casilla.offset().top - $("nav").height() - 5;
                let leftOffset = casilla.offset().left;

                // Anima la pieza para que se mueva a la posición de la casilla.
                pieza.animate({
                    top: topOffset,
                    left: leftOffset
                });

                // Deshabilita la capacidad de arrastrar la pieza después de colocarla en la casilla correcta.
                pieza.draggable('disable');
            }
        }
    });

});

// Selecciona el elemento del DOM con el id 'pizarra' y lo almacena en la variable miCanvas.
let miCanvas = document.querySelector('#pizarra');

// Obtiene el contexto 2D del lienzo (canvas) y lo almacena en la variable linea.
let linea = miCanvas.getContext('2d');

// Crea un arreglo vacío llamado lineas para almacenar las coordenadas de las líneas dibujadas.
let lineas = [];

// Inicializa las variables correccionX y correccionY a 0.
let correccionX = 0;
let correccionY = 0;

// Inicializa la variable pintarLinea como falso, indicando que no se está dibujando una línea en este momento.
let pintarLinea = false;

// Inicializa las variables nuevaPosicionX y nuevaPosicionY a 0.
let nuevaPosicionX = 0;
let nuevaPosicionY = 0;

// Obtiene la posición y dimensiones del lienzo en relación con la ventana del navegador y almacena estos valores en la variable posicion.
let posicion = miCanvas.getBoundingClientRect();

// Asigna los valores de la posición X e Y obtenidos en la línea anterior a las variables correccionX y correccionY.
correccionX = posicion.x;
correccionY = posicion.y;


// Esta función se llama "empezarDibujo" y se encarga de iniciar un nuevo dibujo.
function empezarDibujo() {
    // La variable "pintarLinea" se establece en "true" para indicar que se debe pintar una línea.
    pintarLinea = true;
    // Se agrega un nuevo arreglo vacío al arreglo "lineas".
    lineas.push([]);
};


function guardarLinea() {
    // Agrega un objeto con coordenadas (x, y) a la última línea en el arreglo 'lineas'.
    // La posición x se toma de la variable 'nuevaPosicionX' y la posición y de 'nuevaPosicionY'.
    lineas[lineas.length - 1].push({
        x: nuevaPosicionX,
        y: nuevaPosicionY
    });
}

function dibujarLinea(event) {
    event.preventDefault();  // Previene el comportamiento predeterminado del evento, como desplazamiento en dispositivos táctiles.

    if (!pintarLinea) {  // Si la variable pintarLinea es falsa, no realizamos ninguna acción.
        return;
    }

    linea.lineJoin = linea.lineCap = 'round';  // Configura el estilo de las líneas para que tengan extremos y uniones redondeadas.
    linea.lineWidth = 10;  // Establece el grosor de la línea en 10 píxeles.
    linea.strokeStyle = '#000000';  // Establece el color de la línea en negro (#000000).

    if (event.changedTouches === undefined) {  // Comprueba si el evento proviene de un dispositivo táctil o no.
        nuevaPosicionX = event.layerX;  // Obtiene la posición X del cursor en la capa del elemento.
        nuevaPosicionY = event.layerY;  // Obtiene la posición Y del cursor en la capa del elemento.
    } else {
        nuevaPosicionX = event.changedTouches[0].pageX - correccionX;  // Obtiene la posición X del primer toque en un dispositivo táctil.
        nuevaPosicionY = event.changedTouches[0].pageY - correccionY;  // Obtiene la posición Y del primer toque en un dispositivo táctil.
    }

    guardarLinea();  // Llama a una función para guardar la línea dibujada.
    linea.beginPath();  // Inicia un nuevo camino para dibujar.

    for (const segmento of lineas) {  // Itera a través de los segmentos de línea almacenados en una estructura de datos llamada "lineas".
        linea.moveTo(segmento[0].x, segmento[0].y);  // Mueve el cursor a la primera posición del segmento.
        for (const punto of segmento) {  // Itera a través de los puntos en el segmento.
            linea.lineTo(punto.x, punto.y);  // Dibuja una línea desde la posición actual a la posición del punto en el segmento.
        }
    }

    linea.stroke();  // Dibuja la línea en el lienzo.
}

function pararDibujar() {
    pintarLinea = false;  // Se establece la variable 'pintarLinea' como false, lo que significa que no se dibujarán más líneas.
    guardarLinea();       // Llama a la función 'guardarLinea()' para guardar la línea actual (esto asume que existe una función con ese nombre).
}


function si(e) {
    // Esta función "pictionaryOptions" toma un argumento "e" que se utiliza en una estructura de control switch para realizar diferentes acciones según el valor de "e".
    switch (e) {
        case 1:
            // Si "e" es igual a 1, se llama a la función "lineaFunct()".
            lineaFunct();
            break;
        case 2:
            // Si "e" es igual a 2, se llama a la función "rectanguloFunct()".
            rectanguloFunct();
            break;
        case 3:
            // Si "e" es igual a 3, se llama a la función "cirucloFunct()".
            cirucloFunct();
            break;
        case 4:
            // Si "e" es igual a 4, se llama a la función "dibujoFunct()".
            dibujoFunct();
            break;
        case 5:
            clearCanvas();
            break;
        case 6:
            break; 
        default:
            // Si "e" no coincide con ninguno de los casos anteriores, se crea un arreglo vacío "lineas".
            lineas = [];
            break;
    }
}

function lineaFunct() {
    // Obtiene la posición (offset) del elemento con el ID "pizarra" y la almacena en la variable canvasOffset.
    let canvasOffset = $("#pizarra").offset();
    // Extrae la coordenada izquierda (left) del offset y la almacena en la variable offsetX.
    let offsetX = canvasOffset.left;
    // Extrae la coordenada superior (top) del offset y la almacena en la variable offsetY.
    let offsetY = canvasOffset.top;
    // Inicializa la variable startX con un valor de 0, que se utilizará posteriormente.
    let startX = 0;
    // Inicializa la variable startY con un valor de 0, que se utilizará posteriormente.
    let startY = 0;
    // Inicializa la variable isDown; se utilice más adelante en el código para rastrear el estado de un clic o una acción similar.
    let isDown;

    // Establece el color del trazo de una línea en "naranja".
    linea.strokeStyle = "orange";

    // Establece el ancho del trazo de la línea en 3 unidades.
    linea.lineWidth = 3;


    // Utiliza un selector común para evitar repetir el mismo código.
    const $pizarra = $("#pizarra");

    // Utiliza funciones anónimas para simplificar aún más el código.
    $pizarra.on("mousedown", handleMouseDown);
    $pizarra.on("mousemove", handleMouseMove);
    $pizarra.on("mouseup", handleMouseUp);

    // Simplifica la función de limpiar.
    $("#clear").click(function () {
        lineas.length = 0;
        redrawlineas();
    });

    function handleMouseDown(e) {
        // Obtener la posición X del mouse y restar el desplazamiento horizontal (offsetX)
        let mouseX = parseInt(e.clientX - offsetX);

        // Obtener la posición Y del mouse y restar el desplazamiento vertical (offsetY)
        let mouseY = parseInt(e.clientY - offsetY);

        // Establecer la bandera 'isDown' como verdadera, indicando que se ha presionado el botón del mouse
        isDown = true;

        // Guardar las coordenadas iniciales del mouse en startX y startY para su seguimiento
        startX = mouseX;
        startY = mouseY;
    }

    function handleMouseMove(e) {
        if (!isDown) {
            return;
        }

        // Llamamos a la función "redrawlineas" para volver a dibujar las líneas.
        redrawlineas();

        // Calculamos la posición del mouse relativa al elemento en el que se encuentra.
        const mouseX = e.clientX - offsetX;
        const mouseY = e.clientY - offsetY;

        // Comenzamos un nuevo trazo en el lienzo.
        linea.beginPath();

        // Establecemos el punto de inicio del trazo en las coordenadas iniciales.
        linea.moveTo(startX, startY);

        // Dibujamos una línea desde el punto de inicio hasta la posición actual del mouse.
        linea.lineTo(mouseX, mouseY);

        // Realizamos el trazo en el lienzo.
        linea.stroke();
    }

    function handleMouseUp(e) {
        // Establece la variable 'isDown' como falsa para indicar que el botón del mouse se ha soltado.
        isDown = false;

        // Calcula la posición del puntero del mouse en el eje X con respecto al elemento con desplazamiento ('offsetX').
        const mouseX = e.clientX - offsetX;

        // Calcula la posición del puntero del mouse en el eje Y con respecto al elemento con desplazamiento ('offsetY').
        const mouseY = e.clientY - offsetY;

        // Crea un objeto 'linea' con las coordenadas del punto de inicio ('x1', 'y1') y del punto final ('x2', 'y2').
        const linea = { x1: startX, y1: startY, x2: mouseX, y2: mouseY };

        // Agrega el objeto 'linea' al arreglo 'lineas'.
        lineas.push(linea);

        // Llama a la función 'redrawlineas' para volver a dibujar las líneas con la nueva línea agregada.
        redrawlineas();
    }

    function redrawlineas() {
        // Borrar todo el contenido del lienzo (canvas)
        borrarCanvas();
    
        // Comprobar si no hay líneas para dibujar
        if (lineas.length === 0) {
            return; // Si no hay líneas, salir de la función
        }
    
        // Iterar a través de todas las líneas en el arreglo 'lineas'
        for (const line of lineas) {
            // Comenzar un nuevo trazo (línea)
            linea.beginPath();
    
            // Mover el punto de inicio de la línea a las coordenadas (x1, y1)
            linea.moveTo(line.x1, line.y1);
    
            // Dibujar una línea desde el punto de inicio a las coordenadas (x2, y2)
            linea.lineTo(line.x2, line.y2);
    
            // Dibujar la línea en el lienzo
            linea.stroke();
        }
    }
    
    
}



// Función que inicia el proceso de dibujo
function iniciarDibujo() {
    // Agregar un evento que se activa al presionar el botón del mouse
    miCanvas.addEventListener('mousedown', empezarDibujo, false);
    // Agregar un evento que se activa cuando se mueve el mouse
    miCanvas.addEventListener('mousemove', dibujarLinea, false);
    // Agregar un evento que se activa al soltar el botón del mouse
    miCanvas.addEventListener('mouseup', pararDibujo, false);
}

// Esta función se encarga de borrar todo el contenido del lienzo.
function clearCanvas() {    
    borrarCanvas(); // Llama a la función borrarCanvas para borrar el lienzo.
    lineas = []; // Reinicia el arreglo "lineas" vaciándolo, lo que elimina todas las líneas dibujadas previamente.
}

function borrarCanvas() {
    // Obtén el contexto de dibujo del lienzo (canvas)
    linea.clearRect(0, 0, miCanvas.width, miCanvas.height);
    // Borra todo el contenido del lienzo, desde las coordenadas (0, 0)
    // hasta el ancho (width) y alto (height) del propio lienzo (canvas).
}

function rectanguloFunct() {

}

function cirucloFunct() {

}