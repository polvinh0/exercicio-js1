alert("Questão 7")

let fah = Number(prompt("Por favor, Insira a temperatura em Fahrenheit"))

let cel = (5 / 9 * (fah - 32))
let c = cel.toFixed(1)

alert(fah + "°F, Equivalem a " + c + "°C")
