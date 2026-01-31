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


// iterando todos os itens

pessoas.forEach(element => {
    console.log(element)
}); // Para cada elemento do array dê console.log();

// construindo um novo arr com pessoas com mais de 30 anos
let newArr = [];
let maiores30 = pessoas.forEach((e) => {
    if (e.idade > 30) {
        newArr.push(e);
    } ;
}); // Para cada elemento do array verifique se a idade é maior que 30, se for dê um console.log() no elemento

console.log(newArr);


// soma dos numeros

let numeros = [1, 2, ,3, 4];

let soma = 0;
numeros.forEach(element => {
    soma += element;
    return soma;
});

console.log(soma);
