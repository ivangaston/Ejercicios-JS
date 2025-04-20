const fechaNacimiento = prompt("Tu fecha de nacimiento (en formato YYYY-MM-DD)");
const fechaNacimientoDate = new Date(fechaNacimiento);
const fechaActual = new Date();


const diferenciaTiempo = fechaActual - fechaNacimientoDate;
const edadDias = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24));

console.log("Tu edad en dias es: " + edadDias);