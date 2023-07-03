/* 4. Crea una aplicación que nos calcule el factorial de un número pedido por prompt, lo
realizará mediante un método al que le pasamos el número como parámetro. Para 
calcular el factorial, se multiplica los números anteriores hasta llegar a uno. Por ejemplo, 
si introducimos un 5, realizará esta operación 5*4*3*2*1=120 */




const genFactorial = (number)=>{
    let acumulador = 1;

    if (number < 0) {
        console.log("valor no computable");
    } else if (number == 0) {
        console.log("El factorial es 1.");
    } else {
        for (let i = number; i >= 1; i--) {
            acumulador *=  i;
        }
        console.log(`El factorial es ${acumulador}`);
    }
}

let num = +prompt("Ingrese un numero y le devolvemos el factorial");

genFactorial(num);