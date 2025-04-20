//1)
// let numeros =[12, -5, 7, -3, 9, -8, 15, 3, -25, 40, -33, -9];

// for (let i = 0; i <= numeros.length; i++) {
//   if (numeros[i] > 0) {
//     document.write(numeros[i] + '<br>');	
//   }
// }


//2) 
// for (let i = 0; i <= 50; i++) {
//   if (i%2 == 0) {
//    console.log(i);
//   }
//  }


//3)
// let solicitud = parseInt(prompt("Ingrese un numero enre 1 y 100"));

// if (solicitud >= 1 && solicitud <= 100) {
//   for (let i = 0; i <= 10; i++) {
//     let total = solicitud * i

//     if (total <= 1000) {
//       console.log(`${solicitud} x ${i} = ${total}`)
//     } else { alert('Tu numero es superior a 1000') }
//   }

// } else { alert('El numero no es valido') }


//4)
// let listaNumeros = [23, 45, 12, 67, 34, 89, 21];
// let numeroMax = listaNumeros[0];

// for (const numero of listaNumeros) {
//   if (numero > numeroMax) {
//     numeroMax = numero;
//   }
// }
// console.log(numeroMax);


//5)
// let filas = parseInt(prompt("Ingrese el número de filas para el triángulo: "));

// for (let i = filas; i >= 1; i--) {
//   let linea = " ";

//   for (let j = 1; j <= i; j++) {
//     linea = linea + "*";
//   }

//   console.log(linea);
// }


//6)
// for (let i = 1; i <= 50; i++) {

//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }


//7)
// let suma = 0;

// while (suma < 100) {

//   let numero = parseInt(prompt("Ingrese un numero: "));
//   suma = suma + numero ;
// }
// console.log(`Total: ${suma}`);


//8)
//NULL


//9)
// let edades = [18, 25, 14, 32, 16, 40];

// edades.forEach(edad => {
//   let edadUser = edad >= 18 ? "Mayor de edad" : "Menor de edad";
  
//   console.log(edad,edadUser);
// });


//10)
//NULL


//11)
// let palabra = prompt("Ingrese una palabra .. ");
// let vocales = "aeiouAEIOU";

// let contador = 0;
// for (let letra of palabra) {
//   if (vocales.includes(letra)) {
//     contador++;
//   }
// }
// console.log("vocales en total:", contador);


//12)
//NULL
