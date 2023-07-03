/* 10. Crea un array de números de un tamaño pasado por prompt, el array contendrá números 
aleatorios primos entre los números deseados, por último, nos indica cuál es el mayor
de todos. Haz un método para comprobar que el número aleatorio es primo, puedes
hacer todos los métodos que necesites. */

const primosMayor = (array) => {
    
    // Crea un array con los primos que encuentra en el array que pasa como argumento 
    let arrayprimos=[];
    for (let a = 0; a < array.length; a++) {
        let contadorDivisores = 0;
        let valorselect = array[a];
        
    
        for (let i = 1; i <= valorselect ; i++) {
            if (valorselect % i == 0) {
                contadorDivisores++
            }
        }
        if (contadorDivisores == 2) {
            arrayprimos.push(valorselect);
        }
    }
    console.log(arrayprimos);

    // Comprueba en el array de primos cual es el mayor
    let maxValue=0;
    let position=0;
    for (let b = 0; b < arrayprimos.length; b++) {
        if(arrayprimos[b]>maxValue){
            position = b;
            maxValue = arrayprimos[b];
        }
        
    }

    console.log("el mayor numero primo que ha salido es: "+arrayprimos[position]);
}

// Tamaño del array indicado por el usuario
let size = +prompt("Introduze el tamaño del array");
let array=[];

// Añadir los elementos aleatorios en el array
for (let i = 0; i < size; i++) {
    array.push( Math.floor(Math.random() * 150));
}

// Imprimir array normal
console.log(array);

// Imprimir array de primos encontrados en array normal e indicar cual es el mayor valor que ha salido
primosMayor(array);
