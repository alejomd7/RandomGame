/*

- Declaramos una variable vacía que contendrá el número aleatorio.
- Declaramos una variable que contenga el botón del HTML que va a comprobar el número.
- Declaramos una variable que contenga el botón del HTML que va a limpiar el localStorage.
- Declaramos una variable que contenga el div del HTML que tendrá el texto de resultado.
- Declaramos una variable que contenga el div del HTML que tendrá el texto de estadísticas
- Declaramos una variable que contenga la obtención del valor de "exitosos" almacenado en el localStorage, agregamos un "or" para que se ponga como valor "0" si no existe aún dicha clave.
- Declaramos una variable que contenga la obtención del valor de "fallidos" almacenado en el localStorage, agregamos un "or" para que se ponga como valor "0" si no existe aún dicha clave.

*/

let randomNumber = ""; //Declaramos una variable vacía que contendrá el número aleatorio.
let botonComprobar = document.querySelector("#comprobar"); // Declaramos una variable que contenga el botón del HTML que va a comprobar el número.
let botonClear = document.querySelector(".borrarDatos"); //Declaramos una variable que contenga el botón del HTML que va a limpiar el localStorage.
let textResult = document.querySelector("#resultado"); //Declaramos una variable que contenga el div del HTML que tendrá el texto de resultado.
let textStats = document.querySelector("#estadisticas"); //Declaramos una variable que contenga el div del HTML que tendrá el texto de estadísticas
let valorExito = localStorage.getItem("exitosos") || 0; //Declaramos una variable que contenga la obtención del valor de "exitosos" almacenado en el localStorage, agregamos un "or" para que se ponga como valor "0" si no existe aún dicha clave.
let valorFail = localStorage.getItem("fallidos") || 0;
