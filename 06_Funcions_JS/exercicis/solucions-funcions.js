// Exercici 3.1
function esParellOImparell(num) {
    if (num % 2 === 0) {
        return "El número " + num + " és parell.";
    } else {
        return "El número " + num + " és imparell.";
    }
}
// Exemple d'ús
let resultat = esParellOImparell(5);
console.log(resultat);

