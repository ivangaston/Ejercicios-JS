/* EJERCICIOS INICIALES JS (VARIABLES):
Fecha de entrega: 10/03/25 */

// 1)
// let baseXAltura = prompt('Hola Usuario! Dime en CM la base de tu rectangulo') * prompt(' Y ahora dime en CM la altura y asi te dare el area de tu rectangulo');
// console.log(`El area de tu rectangulo es de ${baseXAltura}`);


//2)
// let nombreUsuario = prompt('Hola usuario!, Escribe tu nombre');
// document.write(`¡Bienvenido al Bootcamp, ${nombreUsuario} !`);


//3)
// let numeroUsuario = prompt('Escribe un numero y te dire si es par o impar');
// let numero = parseInt(numeroUsuario);

// if (!isNaN(numero)) {
//   if (numero % 2 === 0) {
//     alert('Tu numero es par');
//   } else {
//     alert('Tu numero es impar');
//   }
// } else {
//   alert('Eso no es un numero valido.');
// }


//4)
// let colorFav = 'negro';
// let comidaFav = 'pizza';
// let lugarFav = 'Argentina';

// const textoCompleto = `Mi color favorito es el ${colorFav}, mi comida favorita es la ${comidaFav} y mi lugar favorito es ${lugarFav}.`;

// document.write(textoCompleto);


//5)
// let numeroUno = Number(prompt('Ingrese el primer numero'));
// let numeroDos = Number(prompt('Ahora el segundo'));
// let numeroTres = Number(prompt('Ahora el tercero'));

// if (!isNaN(numeroUno) && !isNaN(numeroDos) && !isNaN(numeroTres)) {
//   let promedio = (numeroUno + numeroDos + numeroTres) / 3;
//   console.log(`El promedio es ${promedio}`);
// } else {
//   alert('Ingrese solamente numeros.');
// }


//6)
// let radio = Number(prompt("Ingresa el radio del circulo:"));

// if (!isNaN(radio) && radio > 0) {
//   let perimetro = 2 * Math.PI * radio;
//   console.log(`El perimetro del circulo es: ${perimetro}`);
// } else {
//   console.log("Ingresa un numero valido y mayor que 0.");
// }


//7)
// let minutos = Number(prompt("Ingresa un numero de minutos:"));

// if (!isNaN(minutos) && minutos >= 0) {
//   let segundos = minutos * 60;
//   let horas = parseInt(minutos / 60);

//   alert(`${minutos} minutos equivalen a: ${segundos} segundos o ${horas} hora/s`);
// } else {
//   alert("Por favor, ingresa un numero valido.");
// }


//8)
// let precioDolares = Number(prompt("Ingresa el precio del producto en dolares:"));

// if (!isNaN(precioDolares) && precioDolares > 0) {
//   let precioConIVA = precioDolares * 1.21;
//   let precioEnPesos = precioConIVA * 1130;

//   alert(`Precio en dolares con IVA: $${precioConIVA}. Precio en pesos: $${precioEnPesos}`);
// }
// else {
//   alert("Ingresa un numero valido.");
// }


//9)
let num1 = Number(prompt("Primer numero:"));
let num2 = Number(prompt("Segundo numero:"));
let resultado = 0;
let operacion = prompt("Ingresa una operacion (+, -, *, /):");

if (!isNaN(num1) && !isNaN(num2)) {

  if (operacion === "+") {
    resultado = num1 + num2;
  } else if (operacion === "-") {
    resultado = num1 - num2;
  } else if (operacion === "*") {
    resultado = num1 * num2;
  } else if (operacion === "/") {
    if (num2 !== 0) {
      resultado = num1 / num2;
    } else {
      alert("No se puede dividir por 0.");
      resultado = null;
    }
  } else {
    alert("Error, usa +, -, * o /.");
    resultado = null;
  }

  if (resultado !== null) {
    alert(`El resultado de ${num1} ${operacion} ${num2} es: ${resultado}`);
  }
} else {
  alert("Por favor, ingresa numeros unicamente.");
}
