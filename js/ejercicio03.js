/* 3. Crea una aplicación que nos pida un número por prompt y con un método se lo pasamos
por parámetro para que nos indique si es o no un número primo, debe devolver true si 
es primo sino false. Un número primo es aquel que solo puede dividirse entre 1 y sí 
mismo. Por ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin embargo, 17 si 
es primo. */

const numPrimo = (numComprobar)=>{
    let contadorDivisores = 0;
    for (let i = 1; i <= numComprobar ; i++) {
        if (numComprobar % i == 0) {
            contadorDivisores++
    }
    }
    if (contadorDivisores > 2) {
        return false;
    }else if (contadorDivisores == 2) {
        return true;
    } 
}

let num = prompt("ingrese un número y luego se le mostrara en la consola si ese número es primo");

let esPrimo = numPrimo(num);

console.log(esPrimo);
