/* 7. Crea una aplicación que nos convierta una cantidad de euros introducida por prompt a
otra moneda, estas pueden ser a dólares, yenes o libras. El método tendrá como
parámetros, la cantidad de euros y la moneda a pasar que será una cadena, este no
devolverá ningún valor, mostrará un mensaje indicando el cambio.
El cambio de divisas es:
• 0.86 libras es un 1 €
• 1.28611 $ es un 1 €
• 129.852 yenes es un 1 € */

const conversor = (euros) =>{
    let libras = euros*0.86;
    let dolares = euros*1.28611;
    let yenes = euros*129.852;
    console.log(
        euros+"€ conversado a libras serian "+libras+" libras\n"+
        euros+"€ conversado a dolares serian "+dolares+" dolares\n"+
        euros+"€ conversado a yenes serian "+yenes+" yenes"
    )
}

let euro = +prompt("introduce los euros");
conversor(euro);

