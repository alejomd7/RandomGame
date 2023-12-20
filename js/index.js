

let randomNumber; //Declaramos una variable vacía que contendrá el número aleatorio.
let botonComprobar = document.querySelector("#comprobar"); // Declaramos una variable que contenga el botón del HTML que va a comprobar el número.
let botonClear = document.querySelector(".borrarDatos"); //Declaramos una variable que contenga el botón del HTML que va a limpiar el localStorage.
let textResult = document.querySelector("#resultado"); //Declaramos una variable que contenga el div del HTML que tendrá el texto de resultado.
let textStats = document.querySelector("#estadisticas"); //Declaramos una variable que contenga el div del HTML que tendrá el texto de estadísticas
let valorExito = localStorage.getItem("exitosos") || 0; //Declaramos una variable que contenga la obtención del valor de "exitosos" almacenado en el localStorage, agregamos un "or" para que se ponga como valor "0" si no existe aún dicha clave.
let valorFail = localStorage.getItem("fallidos") || 0;

/* Función generadora del número

- Declaramos una función que generará el número aleatorio.
    - Le añade como valor a la variable que va a contener dicho número un random como número entero.

*/

function generateNumber() {
    randomNumber = Math.floor(Math.random()*30);
}

/*

### Función verificadora de número

- Declaramos una función que comprobará el número que agreguemos.
    - Declaramos una variable local que coge el valor del input donde el usuario va a escribir su número.
    - Ese valor lo transformamos en un número entero (parseInt).
    - Si el número del usuario es estrictamente igual que el número almacenado en la variable que contiene el número aleatorio:
        - Aumentamos el valor de la variable que contiene el número de éxitos.
        - Guardamos el valor en el localStorage con la clave correspondiente al almacenamiento de éxitos.
        - Modificamos el HTML interno del objeto que contiene el div del HTML para el texto de resultado y agregamos el contenido que queramos. Por ejemplo "¡Muy bien!".
        - Modificamos el HTML interno del objeto que contiene el div del HTML para el texto de estadísticas para actualizar los valores de éxito y de fallidos.
        - Llamamos a la función generadora de números para generar un nuevo número aleatorio.
    - Si no:
        - Aumentamos el valor de la variable que contiene el número de fallidos.
        - Guardamos el valor en el localStorage con la clave correspondiente al almacenamiento de fallidos.
        - Modificamos el HTML interno del objeto que contiene el div del HTML para el texto de resultado y agregamos el contenido que queramos. Por ejemplo "Fallaste".
        - Modificamos el HTML interno del objeto que contiene el div del HTML para el texto de estadísticas para actualizar los valores de éxito y de fallidos.

*/

function verifyNumber() {
    let userNumber = document.querySelector("#numeroUsuario").value;
    userNumber = parseInt(userNumber);
    if (userNumber === randomNumber) {
        valorExito++;
        localStorage.getItem("Exitosos", valorExito);
        textResult.innerHTML = "Muy bien!"
        textStats.innerHTML = ""
    }
}
