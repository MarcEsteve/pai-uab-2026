// 14.1. Indica si el número llegit és negatiu o positiu.
let numero = Number(prompt("14.1 - Introdueix un número:"));

if (numero < 0) {
  console.log("el número llegit és negatiu");
} else {
  console.log("el número llegit és positiu");
}

// 14.2. Indica si el número llegit és parell o senar.
numero = Number(prompt("14.2 - Introdueix un número:"));

if (numero % 2 === 0) {
  console.log("el número llegit és parell");
} else {
  console.log("el número llegit és senar");
}

// 14.3. Escriu quin és el més gran amb una sola instrucció if-else.
let numero1 = Number(prompt("14.3 - Introdueix el primer número:"));
let numero2 = Number(prompt("14.3 - Introdueix el segon número:"));

if (numero1 > numero2) {
  console.log("El número més gran és: " + numero1);
} else {
  console.log("El número més gran és: " + numero2);
}

// 14.4. Escriu quin és el més gran de tres números.
numero1 = Number(prompt("14.4 - Introdueix el primer número:"));
numero2 = Number(prompt("14.4 - Introdueix el segon número:"));
let numero3 = Number(prompt("14.4 - Introdueix el tercer número:"));

if (numero1 >= numero2 && numero1 >= numero3) {
  console.log("El número més gran és: " + numero1);
} else if (numero2 >= numero3) {
  console.log("El número més gran és: " + numero2);
} else {
  console.log("El número més gran és: " + numero3);
}

// 14.5. Escriu tres números ordenats de menor a major.
numero1 = Number(prompt("14.5 - Introdueix el primer número:"));
numero2 = Number(prompt("14.5 - Introdueix el segon número:"));
numero3 = Number(prompt("14.5 - Introdueix el tercer número:"));

const numerosOrdenats = [numero1, numero2, numero3].sort((a, b) => a - b);
console.log("Números ordenats de menor a major: " + numerosOrdenats.join(", "));

// 14.6. Comprova si es pot conduir segons el carnet i l'alcoholèmia.
const teCarnet = prompt("14.6 - Tens carnet de conduir? (sí/no):")
  .trim()
  .toLowerCase();
const alcohol = Number(prompt("Quin valor ha donat la prova d'alcoholèmia?"));

if ((teCarnet === "sí" || teCarnet === "si") && alcohol < 0.25) {
  console.log("Sí, pots conduir.");
} else {
  console.log("No pots conduir.");
}

// 14.7. Resta el número més petit del més gran.
numero1 = Number(prompt("14.7 - Introdueix el primer número:"));
numero2 = Number(prompt("14.7 - Introdueix el segon número:"));

if (numero1 > numero2) {
  console.log("La resta és: " + (numero1 - numero2));
} else {
  console.log("La resta és: " + (numero2 - numero1));
}

// 14.8. Calcula el cost total de la compra amb l'enviament.
const compra = Number(prompt("14.8 - Introdueix l'import de la compra en euros:"));

if (compra >= 30) {
  console.log("El cost total és de 30 € perquè el transport és gratuït.");
} else {
  console.log("El cost total és de " + (compra + 4.95).toFixed(2) + " €.");
}

// 14.9. Calcula el preu del gelat segons el recipient i el sabor.
const recipient = prompt("14.9 - Tria el recipient: con (c) o terrina (t):")
  .trim()
  .toLowerCase();
const sabor = prompt(
  "Tria el sabor: 1) Vainilla, 2) Xocolata, 3) Torró, 4) Menta, 5) Oreo, 6) Crema, 7) Gerds, 8) Ametlles:"
).trim();

let preu;

if (recipient === "c") {
  preu = 3.45;
} else if (recipient === "t") {
  preu = 3.95;
}

if (preu === undefined || !["1", "2", "3", "4", "5", "6", "7", "8"].includes(sabor)) {
  console.log("Error dades mal introduïdes");
} else {
  if (["3", "4", "5"].includes(sabor)) {
    preu += 0.5;
  } else if (["6", "7", "8"].includes(sabor)) {
    preu += 1;
  }

  console.log("El preu final del gelat és: " + preu.toFixed(2) + " €.");
}
