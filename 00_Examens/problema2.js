// 2. Tarifes d'aparcament Un aparcament cobra un preu per hora diferent segons el tipus de vehicle:
// Escriu un programa en JavaScript que demani a l'usuari el codi del vehicle i el nombre d'hores estacionades mitjançant prompt().
// El programa ha de calcular i mostrar per consola el preu total de l'aparcament. Si el codi no correspon a cap dels vehicles indicats, ha de mostrar "Tipus de vehicle no vàlid" i no ha de mostrar cap preu.
// Considera que els codis s'introdueixen en majúscules i que el nombre d'hores sempre és un número positiu.
// EXEMPLE D'EXECUCIÓ Tipus de vehicle: C Nombre d'hores: 4 Preu total: 8 €
// Vehicle
// Codi
// Preu per hora
// Motocicleta
// M
// 1 €
// Cotxe
// C
// 2 €
// Furgoneta
// F
// 3 €

const codiVehicle = prompt("Introdueix el codi del vehicle (M, C, F):");
const hores = parseInt(prompt("Introdueix el nombre d'hores estacionades:"));
let preuPerHora;

// Opció amb switch-case

switch (codiVehicle) {
    case "M":
        preuPerHora = 1;
        break;
    case "C":
        preuPerHora = 2;
        break;
    case "F":
        preuPerHora = 3;
        break;
    default:
        console.log("Tipus de vehicle no vàlid");
}

// Opció amb if-else

if (codiVehicle === "M") {
    preuPerHora = 1;
} else if (codiVehicle === "C") {
    preuPerHora = 2;
} else if (codiVehicle === "F") {
    preuPerHora = 3;
} else {
    console.log("Tipus de vehicle no vàlid");
}

// Càlcul del preu total si el codi és vàlid

if (preuPerHora !== undefined) {
    const preuTotal = preuPerHora * hores;
    console.log("Preu total: " + preuTotal + " €");
}