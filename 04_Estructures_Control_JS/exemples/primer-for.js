// let vegades = Number(prompt("Quantes vegades vols repetir el bucle?"));
// let text = "";

// Bucle for equivalent que s'executa tantes vegades com ha indicat l'usuari
// for (let i = 1; i <= vegades; i++) {
//   console.log("Volta número: " + i);
//   text += "Volta número: " + i + "<br>";
// }

// let output = document.getElementById("output");
// if (output) {
//   output.innerHTML = text;
// }

//Explicació del break
// El bucle s'atura quan i és igual a 3, gràcies a la instrucció break.

// let text = "";
// let i;
// for (i = 0; i < 10; i++) {
//   text += "El número és " + i + "<br>";
//   if (i === 3) {
//     break;
//   }
// }
// document.getElementById("output").innerHTML = text;

//Explicació del continue
// El bucle salta a la següent iteració quan i és igual a 3, gràcies a la instrucció continue.

let text = "";
let i;
for (i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  text += "El número és " + i + "<br>";
}
document.getElementById("output").innerHTML = text;
