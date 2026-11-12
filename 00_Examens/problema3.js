// 3. Control d'aforament d'un esdeveniment Un esdeveniment té un aforament màxim de 100 persones. Inicialment, el recinte està buit.
// Escriu un programa en JavaScript que demani repetidament a l'usuari, mitjançant prompt(), el nombre de persones que formen cada grup que vol entrar a l'esdeveniment.
// El programa ha de seguir aquestes normes:
// •
// Si hi ha prou espai per a tot el grup, les persones del grup entren al recinte i se sumen al total.
// •
// Si el grup supera les places disponibles, no entra ningú del grup i es mostra per consola "Aforament insuficient". El programa continua demanant més grups.
// •
// Si l'usuari introdueix 0, el programa deixa de demanar grups.
// •
// En finalitzar, ha de mostrar per consola el nombre total de persones que han entrat.
// Considera que l'usuari sempre introdueix números enters iguals o superiors a zero.
// EXEMPLE D'EXECUCIÓ Persones del grup: 40 Persones del grup: 35 Persones del grup: 30 Aforament insuficient Persones del grup: 20 Persones del grup: 0 Total de persones: 95

let aforamentMaxim = 100;
let totalPersones = 0;
while (true) {
    const personesGrup = parseInt(prompt("Introdueix el nombre de persones del grup:"));
    if (personesGrup === 0) {
        break;
    }
    if (totalPersones + personesGrup <= aforamentMaxim) {
        totalPersones += personesGrup;
    } else {
        console.log("Aforament insuficient");
    }
}
console.log("Total de persones: " + totalPersones);