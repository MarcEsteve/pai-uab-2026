let semafor = "verd",
  text = "";

switch (semafor) {
  case "verd":
    text = "Pots passar";
    break;
  case "taronja":
    text = "Precaució";
    break;
  case "vermell":
    text = "T'atures!";
    break;
  default:
    text = "No és un semàfor";
}
console.log(text);

// Operadors unaris
// 5.1.- Què s’escriurà a la consola si executem aquest codi?

let a = 5; // Inicialitzem a amb 5
a++; // Incrementem a en 1
console.log(a); // Mostrem el valor de a després de l'increment
let b = a++; // Assignem a a b i després incrementem a en 1
console.log(a, b); // Mostrem els valors de a i b

