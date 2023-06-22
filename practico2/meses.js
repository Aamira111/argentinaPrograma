/*Escriba un programa que solicite al usuario ingresar un número entero del 1 al
12 representando los meses de un año; donde 1 es enero, 2 es febrero, 3 es
marzo, etc. Deberá guardar esta información en alguna de las estructuras ya
vistas, es decir, 1 = enero, 2 = febrero, 3 = marzo, etc para luego ser utilizada en
el texto a imprimir. Su programa deberá ser guardado en un archivo meses.js y
consistirá de imprimir por consola la cantidad de días que tiene el mes
ingresado bajo el siguiente formato:
"La cantidad de dias del mes de [mes] es [cantidadDeDias]"
Por ejemplo: si el número ingresado es 1, su programa imprimirá “La cantidad
de dias del mes de enero es 31”.*/

/*NOTAS:
● Nota que el valor de [mes] no es el numero ingresado si no su
correspondiente almacenado en la estructura de datos elegida.
● Para el alcance de este ejercicio, podemos pensar que febrero siempre
tiene 28 días.*/

const readlineSync = require("readline-sync");
let mes = readlineSync.question("Ingrese numero de mes = ");


switch (mes) {
  case "1":
    console.log("La cantidad de dias del mes de Enero es de 31 dias");
    break;

  case "2":
    console.log("La cantidad de dias del mes de Febrero es de 28 dias");
    break;

  case "3":
    console.log("La cantidad de dias del mes de Marzo es de 31 dias");
    break;

  case "4":
    console.log("La cantidad de dias del mes de Abril es de 30 dias");
    break;

  case "5":
    console.log("La cantidad de dias del mes de Mayo es de 31 dias");
    break;

  case "6":
    console.log("La cantidad de dias del mes de Junio es de 30 dias");
    break;

  case "7":
    console.log("La cantidad de dias del mes de Julio es de 31 dias");
    break;

  case "8":
    console.log("La cantidad de dias del mes de Agosto es de 31 dias");
    break;

  case "9":
    console.log("La cantidad de dias del mes de Septiembre es de 30 dias");
    break;

  case "10":
    console.log("La cantidad de dias del mes de Octubre es de 31 dias");
    break;

  case "11":
    console.log("La cantidad de dias del mes de Noviembre es de 30 dias");
    break;

  case "12":
    console.log("La cantidad de dias del mes de  es de 31 dias");
    break;

  default:
    console.log("El numero ingresado no corresponde a ningun mes.");
}
