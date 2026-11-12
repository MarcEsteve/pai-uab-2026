// 1. Classificació de temperatures Escriu un programa en JavaScript que demani a l'usuari una temperatura en graus Celsius mitjançant prompt() i mostri per consola un dels missatges següents:
// •
// "Temperatura alta" si la temperatura és superior a 30 graus.
// •
// "Temperatura baixa" si la temperatura és inferior a 10 graus.
// •
// "Temperatura moderada" en qualsevol altre cas.
// Considera que l'usuari sempre introdueix un número vàlid.

const temperatura = parseFloat(prompt("Introdueix la temperatura en graus Celsius:"));
if (temperatura > 30) {
    console.log("Temperatura alta");
} else if (temperatura < 10) {
    console.log("Temperatura baixa");
} else {
    console.log("Temperatura moderada");
}