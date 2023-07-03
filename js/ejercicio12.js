/* 12. Crea un array de números de un tamaño pasado por prompt, el array contendrá números 
aleatorios entre 1 y 300 y mostrará aquellos números que acaben en un dígito que
nosotros le indiquemos por prompt (debes controlar que se introduce un número 
correcto), estos deben guardarse en un nuevo array. Por ejemplo, en un array de 10 
posiciones le indicamos mostrar los números acabados en 5, podría salir 155, 25, etc. */


const genArrayRandom = (size) =>{
    let array=[];
    for (let i = 0; i < size; i++) {
        array.push(Math.floor(Math.random()*300)+1);
        
    }
    return array;
}
const filtroArray = (array, filtro) =>{
    let arrayfiltrado=[];
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        // operacion fuente: https://lineadecodigo.com/java/ultimo-digito-de-un-numero-con-java/
        if (element%10 == filtro){
            arrayfiltrado.push(element);
        }
        
    }
    return arrayfiltrado;
}

// Recoge datos
let size = +prompt("Inserte el tamaño de la array");
let ultimo = 0;
do{
    ultimo = +prompt("Introduce un digito para usar como filtro")
}while(ultimo>9 || ultimo<0);

// LLama metodos
let array = genArrayRandom(size);
let arrayFiltrado = filtroArray(array, ultimo);

// Muestra arrays
console.log(array);
console.log(arrayFiltrado);