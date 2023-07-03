/* 6. Crea una aplicación que nos cuente el número de cifras de un número entero positivo
(hay que controlarlo) pedido por prompt. Crea un método que realice esta acción, 
pasando el número por parámetro devolverá el número de cifras.
 */

const digitosContador = (numero) => {
    /* Comprobacion de que un valor es un entero fuente: https://www.manualweb.net/javascript/comprobar-numeros-javascript/ */
    if(!Number.isInteger(numero)){
        return 0;
    }
    var digitos = ""+numero;
    return digitos.length;
}

var numero = +prompt("Ingresa un número entero:");

var numeroDigitos = digitosContador(numero);

console.log("Hay un total de "+numeroDigitos+ " digitos en el numero introducido");