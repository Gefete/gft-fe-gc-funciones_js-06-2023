/* 5. Crea una aplicación que nos convierta un número en base decimal a binario. Esto lo
realizará un método al que le pasaremos el número como parámetro, devolverá un 
String con el número convertido a binario. Para convertir un número decimal a binario, 
debemos dividir entre 2 el número y el resultado de esa división se divide entre 2 de 
nuevo hasta que no se pueda dividir más, el resto que obtengamos de cada división 
formará el número binario, de abajo a arriba. */

const binario = (numero) => {
    if(numero<=0 || !Number.isInteger(numero)){
        console.log("el valor no es valido");
        return "nullo"
    }
    let binarioNum = "";
    while (numero > 0) {
        let resto = numero % 2;
        binarioNum = resto + binarioNum;
        numero = Math.floor(numero / 2);
    }
    return binarioNum;
}

let num = +prompt("Introduce un numero y lo devolveromos en binario");

let binarioprint = binario(num);

console.log(binarioprint);
