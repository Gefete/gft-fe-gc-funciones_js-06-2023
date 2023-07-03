/* 2. Crea una aplicación que nos genere una cantidad de números enteros aleatorios pasados
por el usuario (prompt). Crea un método donde pasamos como parámetros entre entre 
qué números queremos que los genere, podemos pedirlas al usuario antes de generar 
los números. Este método devolverá un número entero aleatorio. Muestra estos 
números por consola.
 */

const genRandom = (min, max) => {
    for (let i = 0; i < cantidad; i++) {
        let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(numeroAleatorio);
        
    }
}

let cantidad = +prompt("Introduce la cantidad de numeros aleatorios que que quieres generar");
let minimo = +prompt("Introducec el numero minimo a generar");
let maximo = +prompt("Introducec el numero maximo a generar");


genRandom(minimo, maximo);
