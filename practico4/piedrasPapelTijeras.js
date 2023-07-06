function obtenerJugadaComputadora() {
  let eleccion = ["piedra", "papel", "tijera"];
  let indice = Math.floor(Math.random() * 3);
  return eleccion[indice];
}

const readlineSync = require("readline-sync");

function obtenerJugadaUsuario() {
  let eleccionUsuario = readlineSync.question(
    "Ingrese su eleccion (piedra, papel o tijera) Mucha suerte!! "
  );
  return eleccionUsuario;
}

let jugadaComputadora = obtenerJugadaComputadora();
let jugadaUsuario = obtenerJugadaUsuario();
let resultado = determinarGanador(jugadaComputadora, jugadaUsuario);

function determinarGanador(jugadaComputadora, jugadaUsuario) {
  if (
    (jugadaComputadora === "piedra" && jugadaUsuario === "tijera") ||
    (jugadaComputadora === "papel" && jugadaUsuario === "piedra") ||
    (jugadaComputadora === "tijera" && jugadaUsuario === "papel")
  ) {
    return "GANA LA COMPUTADORA";
  } else if (jugadaComputadora === jugadaUsuario) {
    return "EMPATE";
  } else {
    return "GANASTE";
  }
}

console.log("La computadora eligio:" + " " + jugadaComputadora);
console.log("El usuario eligio:" + " " + jugadaUsuario);
console.log("El resultado fue:" + " " + resultado);
