const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const maiores5 = numeros.filter((e) => e > 5);

console.log(maiores5) // Saída-> [6, 7, 8, 9, 10];

// PESSOAS COM IDADE SUPERIOR A 50
// PESSOAS COM MAIS DE 5 LETRAS NO NOME
// PESSOAS CUJO O NOME TERMINA COM 'A'

const pessoas = [
    { nome: "Mateus", idade: 18 },
    { nome: "Ana", idade: 22 },
    { nome: "Carlos", idade: 30 },
    { nome: "Julia", idade: 16 },
    { nome: "Pedro", idade: 25 },
    { nome: "Joelma", idade: 75 },
    { nome: "Junior", idade: 15 },
    { nome: "Josimar", idade: 65 },
    { nome: "Jose", idade: 45 }
];

const maiores50 = pessoas.filter(p => p.idade > 50)
const maior5 = pessoas.filter(p => p.nome.length > 5)
const terminaA = pessoas.filter(p => p.nome.slice(-1) === 'a');

console.log(maiores50)
console.log(maior5)
console.log(terminaA)