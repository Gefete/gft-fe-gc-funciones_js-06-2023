/* 1. Crea una aplicación que nos calcule el área de un círculo, cuadrado o triángulo.
Pediremos al usuario que figura queremos calcular su área y según lo introducido pedirá 
los valores necesarios para calcular el área. Para ello has de crear un método por cada 
figura para calcular cada área, este devolverá un número real. Muestra el resultado por 
consola.
Aquí te mostramos que necesita cada figura:
• Circulo: (radio^2)*PI
• Triangulo: (base * altura) / 2
• Cuadrado: lado * lado
 */


const calcSquare = () => {
    // Variable
    let lado = +prompt("inserte el lado del quadrado");

    // Result
    console.log((lado*lado)+ " m^2");
}

const calcCircle = () => {
    // Variable
    let radio = +prompt("inserte el radio del circulo");

    // Result
    console.log((Math.PI*radio**2)+ " m^2");
}

const calcTriangle = () => {
    // Variable
    let base = +prompt("Inserte la base del triangulo");
    let altura = +prompt("Inserte la altura del triangulo");

    // Result
    console.log(((base*altura)/2)+ "m^2");
}

let broken=false

while (!broken) {
    let figura = prompt("Inserte que tipo de figura quiere calcular (circulo, triangulo, cuadrado)");

    figura = figura.toLowerCase();
    switch (figura) {
        case "circulo":
            calcCircle();
            broken=true;
            break;
        case "cuadrado":
            calcSquare();
            broken=true;
            break;
        case "triangulo":
            calcTriangle();
            broken=true;
            break;
        default:
            console.log("Valor incorrecto");
    }
}



