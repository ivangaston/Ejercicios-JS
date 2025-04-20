const numeros = [10, 20, 30, 40, 50, 60, 63, 79, 81, 95];
const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
const promedio = suma / numeros.length;

console.log("El promedio de los numeros es:", promedio);
