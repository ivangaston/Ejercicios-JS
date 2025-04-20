const numeroSecreto = Math.floor(Math.random() * 50) + 1;
let intentos = 0;
let adivinado = false;

while (intentos < 5 && !adivinado) {
  const intento = parseInt(prompt("Adivina un numero entre 1 y 50 (intento " + (intentos + 1) + " de 5): "))
  
  if (intento === numeroSecreto) {
    alert("Adivinaste el numero!!")
    adivinado = true
  } else if (intento < numeroSecreto) {
    alert("Mas alto")
  } else {
    alert("Mas bajo")
  }
  
  intentos++
}

if (!adivinado) {
  alert("Error, no adivinaste el numero. El numero era: " + numeroSecreto)
};
