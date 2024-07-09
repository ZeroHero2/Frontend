// Operadores de comparacion
// == igual
// === igual y del mismo tipo
// != diferente
// !== diferente y del mismo tipo
// > mayor que
// < menor que
const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

console.log(numero1 == numero2); // true

// Operadores logicos
// && and
// || or
// ! not
console.log(numero1 == numero3 && numero1 == numero2); // false

// Condicionales
// Uso del if
edad = 20;
if (edad >= 18) {
    console.log("Eres mayor de edad");
}
let nombre = "Juan";
if (nombre == "Juan") {
    console.log("Eres Juan");
} else {
    console.log("No eres Juan");
}


// Adivina el numero secreto
const numeroSecreto = Math.floor(Math.random() * 10 + 1);

const numeroJugador = parseInt(
    prompt("Adivina el numero secreto entre el 1 y el 10")
);

console.log (`Este es el numero secreto ${numeroSecreto}`);

if(numeroJugador == numeroSecreto){
    console.log("Adivinaste el numero secreto");
}
else if(numeroJugador < numeroSecreto){
    console.log("El numero secreto es mayor");
}
else if(numeroJugador > numeroSecreto){
    console.log("El numero secreto es menor");
} 
