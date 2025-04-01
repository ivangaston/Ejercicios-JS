let listaNumeros = [23, 45, 12, 67, 34, 89, 21];
let numeroMax = listaNumeros[0];

for (const numero of listaNumeros) {
  if (numero > numeroMax) {
    numeroMax = numero;
  }
}
console.log(numeroMax);