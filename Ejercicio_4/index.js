let palabra = prompt("ingresa una palabra o letra")
let cadena = ""

while (palabra != "") {
    cadena += palabra
    console.log(cadena)
    palabra = prompt("ingresa una palabra o letra")
}