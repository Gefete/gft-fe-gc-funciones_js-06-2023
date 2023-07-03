/* 11. Crea dos arrays de números con la dimensión pasada por teclado. Uno de ellos estará
rellenado con números aleatorios y el otro apuntará al array anterior, reasigna los valores
del segundo array con valores aleatorios. Después, crea un método que tenga como
parámetros, los dos arrays y devuelva uno nuevo con la multiplicación de la posición 0 
del array1 con el del array2 y así sucesivamente. Por último, muestra el contenido de 
cada array. */

    const multiplicacion = (array1, array2) => {
        let resultado = [];
        
        for (var i = 0; i < array1.length; i++) {
            resultado.push(array1[i] * array2[i]);
        }
        
        return resultado;
    }
    // Array1
    let size = +prompt("Ingresa la cantidad de numeros que quieres en el array");
    let array1 = [];
    for (let i = 0; i < size; i++) {
        array1.push( Math.floor(Math.random() * (size)));
    }

    // Array2
    var array2 = array1.slice();
    for (var i = 0; i < size; i++) {
        array2[i] = Math.floor(Math.random() * (size));
    }

    // Mostrar contenido de cada array
    console.log(array1);
    console.log(array2);
    console.log(multiplicacion(array1, array2));