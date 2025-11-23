/*
## **10) Desafio Prático – Mini Sistema**

Crie um algoritmo que:

* Peça 5 números ao usuário;
* Armazene em um array;
* Mostre a soma de todos;
* Mostre o maior e o menor número.

---
*/

// Declarando Variáveis

let array = [];
let maior;
let menor;
let soma = 0;


// Estrutura de repeticao (PARA)
for (let i = 0; i < 5; i++) {
    // Entrada de dados - numero digitado é armazenado no array
    let numeros = parseInt(prompt(`Digite o ${i + 1}° número:`));
    array.push(numeros);
    soma = numeros + soma;

    // Estrutura condicional - compara o maior e menor valor
    if (i === 0){
        // maior recebe o numero digtiado e menor tambem recebe o numero digitado
        maior = numeros;
        menor = numeros;
    } else {
        // verifica se o numero digitado é maior ou menor
        if (numeros > maior){
            maior = numeros;
        } if (numeros < menor){
            menor = numeros;
        }
    }
}

console.log(soma);
console.log(maior);
console.log(menor);