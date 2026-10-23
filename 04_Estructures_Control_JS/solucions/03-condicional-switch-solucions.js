// 15.1. Escriu el nom del mes corresponent al número introduït.
const mes = Number(prompt("15.1 - Introdueix un número de mes (1-12):"));

switch (mes) {
  case 1:
    console.log("Gener");
    break;
  case 2:
    console.log("Febrer");
    break;
  case 3:
    console.log("Març");
    break;
  case 4:
    console.log("Abril");
    break;
  case 5:
    console.log("Maig");
    break;
  case 6:
    console.log("Juny");
    break;
  case 7:
    console.log("Juliol");
    break;
  case 8:
    console.log("Agost");
    break;
  case 9:
    console.log("Setembre");
    break;
  case 10:
    console.log("Octubre");
    break;
  case 11:
    console.log("Novembre");
    break;
  case 12:
    console.log("Desembre");
    break;
  default:
    console.log("Número de mes no vàlid.");
}

// 15.2. Calcula el preu del gelat segons el recipient i el grup de sabors.
const recipient = prompt("15.2 - Tria el recipient: con (c) o terrina (t):")
  .trim()
  .toLowerCase();
let preuBase;

switch (recipient) {
  case "c":
    preuBase = 3.45;
    break;
  case "t":
    preuBase = 3.95;
    break;
  default:
    console.log("Error dades mal introduïdes");
}

const grupSabor = Number(
  prompt("Tria el grup de sabors: 1) Vainilla o xocolata, 2) Torró, menta o Oreo, 3) Crema, gerds o ametlles:")
);
let increment;

switch (grupSabor) {
  case 1:
    increment = 0;
    break;
  case 2:
    increment = 0.5;
    break;
  case 3:
    increment = 1;
    break;
  default:
    console.log("Error dades mal introduïdes");
}

if (preuBase !== undefined && increment !== undefined) {
  console.log("El preu final del gelat és: " + (preuBase + increment).toFixed(2) + " €.");
}

// 15.3. Indica si el dia de la setmana és laborable o festiu.
const dia = prompt("15.3 - Introdueix la inicial del dia (l, m, x, j, v, s, d):")
  .trim()
  .toLowerCase();

switch (dia) {
  case "l":
  case "m":
  case "x":
  case "j":
  case "v":
    console.log("És un dia laborable.");
    break;
  case "s":
  case "d":
    console.log("És un dia festiu.");
    break;
  default:
    console.log("Lletra de dia no vàlida.");
}
