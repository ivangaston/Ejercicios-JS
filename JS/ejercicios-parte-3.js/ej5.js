const numeros = [15, 42, 3, 18, 90, 67, 29];
const ordenados = [...numeros].sort((a, b) => b - a);

const segundoMayor = ordenados[1];

console.log("El segundo numero mas grande es: " + segundoMayor);
