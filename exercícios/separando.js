/*
## **8) Strings + Arrays – Separando Palavras**

Peça ao usuário uma frase e transforme-a em um array, separando pelos espaços.

---
*/

let frase = prompt('Digite uma frase:');
let palavras = frase.split(' ');
let numeroPalavras = palavras.length;

console.log(`Quantidade de palavras: ${numeroPalavras}`);
console.log(palavras);