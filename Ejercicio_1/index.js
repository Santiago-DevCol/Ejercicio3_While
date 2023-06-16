let numero = parseInt(prompt("Introduce un número: "));

console.log("Los múltiplos de 5 hasta el número", numero, "son:");

let i = 1;
while (i <= numero) {
    if (i % 5 === 0) {
        alert(i);
        console.log(i);
    }
    i++;
}