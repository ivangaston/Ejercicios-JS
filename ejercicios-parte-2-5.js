let filas = parseInt(prompt("Ingrese el número de filas para el triángulo: "));

for (let i = filas; i >= 1; i--) {
  let linea = " ";

  for (let j = 1; j <= i; j++) {
    linea = linea + "*";
  }

  console.log(linea);
}
