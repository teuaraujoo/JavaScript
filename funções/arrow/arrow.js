const soma = (v1, v2) => {
    return v1 + v2
}

console.log(soma(10, 5));

// se tiver apenas 1 parâmetro nao precisa dos parenteses

const nome = 'Mateus';

const saudar = n => {
    return `Olá ${n}!`;
}

console.log(saudar(nome));

// quando nao usar o return nao precisa utilizar as chaves / sem return sem chaves / com return com chaves 

const add = n => n + 10;
// const add = (n) => n + 10 

console.log(add(10));

// dobro

const dobro = n => n * 2;
console.log(dobro(15));

// maior num


// ? = 'ENTAO'
// : = 'SENÃO'
// condição + expressao 1 + expressao 2 

const maior = (a, b) => a > b ? a : b; // = if (a > b){return a else return b}
console.log(maior(10, 20));

// letras maisculas

const maisculas = a => a.toUpperCase();
console.log(maisculas('Mateus'));

// apenas pares - .filter

const values = [1, 2, 3, 4, 5, 6];
const filtroPar = (arr) => {
    return arr.filter(valor => valor % 2 === 0)
};

console.log(filtroPar(values));

// ao quadrado - .map

const numeros = [1, 2, 3, 4, 5, 6];
const aoQuadrado = (arr) => {
    return arr.map(n => n * n);
};

console.log(aoQuadrado(numeros));

// soma dos valores - .reduce

const somaValores = (...valores) => {
    return valores.reduce((x, y) => x +  y, 0);
};

console.log(somaValores(1, 2, 3, 4, 5, 6));

// maior idade

const Pessoas = [
    {
        nome: 'Mateus', 
        idade: 18
    },
    {
        nome: 'Marcos', 
        idade: 28
    },
    {
        nome: 'Julio', 
        idade: 14
    },
    {
        nome: 'Danilo', 
        idade: 19
    }
];

const maior18 = arr => {
    return arr.filter(p => p.idade >= 18);
}

console.log(maior18(Pessoas));

// quant palavras

let frase = 'Mateus';
let tamanho = 0;

const qCaractere = p => {
    return tamanho = p.length;
};

console.log(qCaractere(frase));


// produtos acima de 100

const Produtos = [
    { nome: 'Gloss',  preco: 80 },
    { nome: 'Frigideira', preco: 120 },
    { nome: 'Fogao', preco: 1200 },
    { nome: 'Pente', preco: 10 }
];

const maior100 = arr => 
    arr.filter(preco => preco.preco > 100)
    .map(preco => preco.nome);


console.log(maior100(Produtos));

// DESAFIO — map + filter + reduce + arrow function

const Products = [
    { nome: "Mouse", preco: 80 },
    { nome: "Teclado", preco: 150 },
    { nome: "Monitor", preco: 900 },
    { nome: "Headset", preco: 120 }
];

const desconto = arr => 
     arr.map(p => (p.preco * 0.85))
    .filter(p => p > 100)
    .reduce((x, y) => x + y)
    .toFixed(2);

console.log(`Soma dos valores dos produtos maiores que 100 apos o desconto de 85%: ${desconto(Products)}`);
