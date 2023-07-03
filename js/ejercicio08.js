/* 8. Crea un array de 10 posiciones de números con valores pedidos por prompt. Muestra
por consola el índice y el valor al que corresponde. Haz dos métodos, uno para rellenar 
valores y otro para mostrar */

const rellenarArray = () => {
    let array = [];
    for (let i = 0; i < 10; i++) {
        array.push(+prompt("Introduce el valor para la posicion -> "+i));
    }
    return array;
}

const mostrarArray = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log("valor: "+array[i]+" en la posicion "+i);
    }
}

let arrayUser = rellenarArray();
mostrarArray(arrayUser);