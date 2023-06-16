let numeros = parseInt(prompt("ingrese solo numeros, si ingrersa 0 acabamos el ciclo"));
let guardarNumeros =[]
1
while(numeros != 0){
    guardarNumeros.push(numeros)
    console.log(guardarNumeros)
    numeros = parseInt(prompt("ingrese solo numeros, si ingrersa 0 acabamos el ciclo"));
}