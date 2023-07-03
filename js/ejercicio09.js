/* 9. Crea un array de números donde le indicamos por prompt el tamaño del array,
rellenaremos el array con números aleatorios entre 0 y 9. Al final muestra por consola el
valor de cada posición y la suma de todos los valores. Tareas a realizar: Haz un método 
para rellenar el array(que tenga como parámetros los números entre los que tenga que 
generar) y otro para mostrar el contenido y la suma del array */


// Haz un método para rellenar el array(que tenga como parámetros los números entre los que tenga que   generar)

const generateRandom = (size) =>{
    let array = [];
    if(!Number.isInteger(size)){
        return null;
    }
    for (let i = 0; i < size; i++) {
        let randomnum = Math.floor(Math.random() * 9);;
        array.push(randomnum);
        console.log("posicion "+i+" tenemos e valor: "+randomnum);
    }
    return array;
}

// para mostrar el contenido y la suma del array
const sumaArray = (array) => {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i]
    }
    console.log("La suma de todos los numeros da un valor de "+suma);
}

let sizeArray = +prompt("Indica el tamaño de la array que quieres generar");
let arrayrandoms = generateRandom(sizeArray);
sumaArray(arrayrandoms);