const numeros = [8, 15, 23, 42, 16, 4, 10, 7, 19];
let suma = 0;

for (let i = 0; i < numeros.length; i += 2) {
  suma += numeros[i]
};

console.log("La suma de los elementos en posiciones pares es: " + suma);
