let solicitud = parseInt(prompt("Ingrese un numero enre 1 y 100"));

if (solicitud >= 1 && solicitud <= 100) {
  for (let i = 0; i <= 10; i++) {
    let total = solicitud * i

    if (total <= 1000) {
      console.log(`${solicitud} x ${i} = ${total}`)
    } else { alert('Tu numero es superior a 1000') }
  }

} else { alert('El numero no es valido') }