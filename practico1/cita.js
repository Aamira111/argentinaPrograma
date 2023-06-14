let cita = "Tres tristes tigres comen trigo en un trigal" 
let substring = "tigres comen trigo"

/*
a. Recupera la longitud de la cita y la guardes en una variable llamada
tamañoDeCita. Deberás imprimir por consola un mensaje con el
siguiente formato:
*/ 

let tamañoDeCita = cita.length;

console.log("El tamaño de la cita es:" + tamañoDeCita)

//respuesta: El tamaño de la cita es:44
//-------------------------------------------------------------------------------

/*
b. Busca la posición del índice donde aparece substring en cita, y
almacenes ese valor en una variable llamada indice. Deberás imprimir
por consola un mensaje con el siguiente formato:
 */

let indice = cita.indexOf(substring);

console.log("El indice del substring es:" + indice);

//respuesta: El indice del substring es:13
//-------------------------------------------------------------------------------


/*
c- Usa una combinación de las variables que tienes y las
propiedades/métodos de cadena disponibles para recortar la cita original
a "Tres tristes tigres comen trigo", y la guardes en una variable
llamada citaRevisada. Por último, para verificar que el valor de
citaRevisada es correcto, deberás imprimirla por consola
*/

let  citaRevisada =  cita.slice(0, 31) ;

console.log(citaRevisada);

// respuesta: Tres tristes tigres comen trigo