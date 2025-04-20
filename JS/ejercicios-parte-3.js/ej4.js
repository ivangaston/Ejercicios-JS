const numero = parseInt(prompt("Ingresa un numero entero"));
let resultado = 1;

for (let i = 1; i <= numero; i++) {
  resultado *= i;
}

console.log("La multiplicacion de los numeros desde 1 hasta " + numero + " es: " + resultado);
