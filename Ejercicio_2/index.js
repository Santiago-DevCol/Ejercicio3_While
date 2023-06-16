let numero1 = parseInt(prompt("Ingrese el primer número (entre 1 y 50):"));
let numero2 = parseInt(prompt("Ingrese el segundo número (entre 1 y 50):"));

if (numero1 < 1 || numero1 > 50 || numero2 < 1 || numero2 > 50) {
  alert("Los números ingresados deben estar entre 1 y 50.");
  location.reload()
} else {
  let contador = 1;
  
while (contador <= 50) {
  if (contador === numero1 || contador === numero2) {
      console.log(contador + " ¡Lotería!");
  }else{
    console.log(contador);
  }  
  contador++;
  }
}