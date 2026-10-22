/*

1.1.- Digues quins d'aquests noms de variables són correctes i quins no. 

*/

// 1. variAble (Correcte)
// 2. Variable
// 3. vari-able
// 4. vari_able
// 5. _variable
// 6. vari.able
// 7. vari4able
// 8. 4variable (No correcte)
// 9. variable4
// 10. variable_4
// 11. LaMevaVariable

/*

Declaració 2.1.- Què passaria si féssim aquestes declaracions de variables?
Pensa primer que creus que passaria. Després pots provar a executar aquestes
instruccions i veure que passa (si passa alguna cosa).

a.- var a = 1; var a = 2; console.log(a);
b.- var a = 1; let a = 2; console.log(a);
c.- let a = 1; var a = 2; console.log(a);
d.- let a = 1; let a = 2; console.log(a);

*/

// a.- 
var a = 1; var a = 2; console.log(a);
// RESULTAT: Imprimeix 2 per consola.
// EXPLICACIÓ: 'var' permet redeclarar la mateixa variable dins del mateix àmbit (scope).
// La segona declaració simplement sobreescriu el valor de la primera sense cap error.
var a = 1;
var a = 2;
console.log("2.1 a:", a); // 2

// b.- var a = 1; let a = 2; console.log(a);
// RESULTAT: SyntaxError: Identifier 'a' has already been declared.
// EXPLICACIÓ: 'let' no permet redeclarar una variable amb un identificador que ja ha
// estat declarat prèviament en el mateix àmbit (encara que s'hagi declarat amb 'var').
// (Es deixa comentat perquè si no el fitxer no es podria executar degut a l'error de sintaxi)
/*
var b1 = 1;
let b1 = 2; // Error de sintaxi
console.log(b1);
*/

// c.- let a = 1; var a = 2; console.log(a);
// RESULTAT: SyntaxError: Identifier 'a' has already been declared.
// EXPLICACIÓ: 'var' tampoc pot redeclarar un identificador que ja s'ha declarat amb 'let'
// en el mateix àmbit.
/*
let c1 = 1;
var c1 = 2; // Error de sintaxi
console.log(c1);
*/

// d.- let a = 1; let a = 2; console.log(a);
// RESULTAT: SyntaxError: Identifier 'a' has already been declared.
// EXPLICACIÓ: 'let' no permet redeclarar la mateixa variable dins del mateix àmbit.
// Per modificar el valor d'una variable 'let' cal reassignar-la (a = 2), no redeclarar-la (let a = 2).
/*
let d1 = 1;
let d1 = 2; // Error de sintaxi
console.log(d1);
*/
