// Aydiomio

// Declaramos una variable vacía que contendrá el número aleatorio.

let randomNumber;

// Declaramos una variable que contenga el botón del HTML que va a comprobar el número.

let comprobarButton = document.querySelector("#comprobar");

// Declaramos una variable que contenga el botón del HTML que va a limpiar el localStorage.

let cleanStorage = document.querySelector(".borrarDatos");

// Declaramos una variable que contenga el div del HTML que tendrá el texto de resultado.

let textResult = document.querySelector("#resultado");

// Declaramos una variable que contenga el div del HTML que tendrá el texto de estadísticas

let textStats = document.querySelector("#estadisticas");

// Declaramos una variable que contenga la obtención del valor de "exitosos" almacenado en el localStorage, agregamos un "or" para que se ponga como valor "0" si no existe aún dicha clave.

