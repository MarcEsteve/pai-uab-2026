let temperatura = [25, 24, 20, 23, 22, 25, 27, 26, 23, 27];

let tMaxima = temperatura[0];
let tMinima = temperatura[0];
let suma = 0;

for (let i = 0; i < temperatura.length; i++) {
  suma += temperatura[i];
  if (tMaxima < temperatura[i]) {
    tMaxima = temperatura[i];
  }
  if (tMinima > temperatura[i]) {
    tMinima = temperatura[i];
  }
}

console.log("Temperatura màxima: ", tMaxima);
console.log("Temperatura mínima: ", tMinima);
console.log("Temperatura mitjana: ", suma / temperatura.length);