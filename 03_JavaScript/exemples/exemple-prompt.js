// prompt() demana una dada a l'usuari mitjançant una finestra emergent.
// IMPORTANT: Sempre retorna una cadena de text (String)!

// 1. Demanar un text (ex: nom de la ciutat)
// let ciutat = prompt("Quina ciutat vols consultar?");
// alert("Estàs consultant dades de la ciutat de: " + ciutat);

// 2. Demanar un nombre (ex: nombre d'arbres al carrer)
let resposta = prompt("Quants arbres hi ha al teu carrer?");

// Si no fem conversió, faria una concatenació de text (ex: "5" + 1 = "51")
// Per això fem la conversió a nombre amb Number():
let arbresActuals = Number(resposta);
let arbresTotals = arbresActuals + 1; // Suma matemàtica

alert("Si en plantem 1 més al teu carrer, en tindràs " + arbresTotals + "!");
