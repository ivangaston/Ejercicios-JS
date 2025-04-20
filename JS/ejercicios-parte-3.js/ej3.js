const numero = parseInt(prompt("Ingresa un numero"));
let mensaje = "El numero " + numero + " es divisible por: ";

if (numero % 2 === 0) { mensaje += "2" };

if (numero % 3 === 0) { mensaje += "3" };

if (numero % 5 === 0) { mensaje += "5" };

if (numero % 7 === 0) { mensaje += "7" };

if (mensaje === "El numero " + numero + " es divisible por: ") {
  console.log("El numero " + numero + " no es divisible ni por 2, 3, 5 o 7")
} else {
  console.log(mensaje)
}
