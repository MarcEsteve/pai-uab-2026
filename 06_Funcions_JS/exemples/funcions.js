//declaració de la funció al mateix script
function suma() {
  let laSumaEs = 3 + 2;
  return laSumaEs;
}
let resultat;
resultat = suma(); // resultat = 5;
console.log(resultat); //5
// let provaVariable=5;

function sumar(s1, s2) {
    
  let laSumaEs = s1 + s2;
//   let laSumaEs = s1 + s2 +provaVariable; //Erroni fer servir variables dins de funcions que estiguin definides fora de la funció, compte amb el scope
  return laSumaEs;
}

let valor1= Number(prompt("Introdueix el primer valor:"))
let valor2= Number(prompt("Introdueix el segon valor:"))

let resultSuma = sumar(valor1, valor2);
//s1(paràmetre en la funció)=valor1 (argument en la crida)
//s2(paràmetre en la funció)=valor2 (argument en la crida)
console.log(resultSuma); //8
