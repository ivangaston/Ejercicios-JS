let edades = [18, 25, 14, 32, 16, 40];

edades.forEach(edad => {
  let edadUser = edad >= 18 ? "Mayor de edad" : "Menor de edad";
  
  console.log(edad,edadUser);
});
