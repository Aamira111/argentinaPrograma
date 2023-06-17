/*Solicite al usuario ingresar un número. Si el número es positivo, muestra
por consola el mensaje: "El numero es positivo". Si el número es igual a
cero, muestra por consola el mensaje: "El numero es cero". Si el número
es negativo, muestra por consola el mensaje: "El numero es negativo".
Guardar el programa en un archivo con nombre positivoNegativo.js*/
 
    let numero = prompt ("Ingrese un numero");

    if (numero > 0){
        alert ("El numero es positivo");
    }else if(numero == 0){
        alert ("El numero es cero");
    }else if(numero < 0 ){
        alert ("El numero es negativo");

    }

