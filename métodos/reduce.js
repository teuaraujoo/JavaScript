let numeros = [1, 2, 3, 4, 22, 80, 120, 87, 98, 15];

let somaNumeros = numeros.reduce((a, c) => a + c, 0);

console.log(numeros);
console.log(somaNumeros);

// VALORES PARES

let pares = numeros.reduce((acumulador, valor) => {
    if (valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, [] /* valor inicial do acumulador (arr vazio) */);

console.log(pares);

// DOBRO DOS VALORES

let dobro = numeros.reduce((acumulador, valor) => {
    valor *= 2;
    acumulador.push(valor);
    return acumulador;
}, []);

console.log(dobro);

// PESSOA MAIS VELHA

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

let maisVelha = pessoas.reduce((acumulador, valor) => {
    valor.idade > acumulador.idade ? acumulador = valor : acumulador
    return acumulador;
});

console.log(maisVelha);