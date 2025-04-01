let palabra = prompt("Ingrese una palabra .. ");
let vocales = "aeiouAEIOU";

let contador = 0;
for (let letra of palabra) {
  if (vocales.includes(letra)) {
    contador++;
  }
}
console.log("vocales en total:", contador);