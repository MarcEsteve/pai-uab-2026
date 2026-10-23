//13.1.- Escriu un programa que donat un número llegit amb prompt escrigui el missatge “el número llegit és negatiu” si el número és més petit que zero.

// let numero = parseInt(prompt("Introdueix un número:"));

// if (numero<0) {
//     console.log("el número llegit és negatiu");
// } 

// 13.2.- Escriu un programa que donat un número llegit amb prompt, escrigui el missatge “el número llegit és parell” si el número es parell.

// let numero = parseInt(prompt("Introdueix un número:"));

// if (numero % 2 === 0) {
//   console.log("el número llegit és parell");
// }

// 13.3.- Escriu un programa que, donat un número llegit amb prompt, escrigui “el número llegit és parell” si el número es parell, o “el número llegit és senar”, si és senar. Fes servir un if per cada cas. 

let number = parseInt(prompt("Introdueix un número:"));

if (number%2==0) {
  console.log("el número llegit és parell");
} 

if (number%2!=0) {
  console.log("el número llegit és senar");
} 