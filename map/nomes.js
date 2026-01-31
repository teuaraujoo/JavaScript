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

const soNome = pessoas.map((obj) => {
    return obj.nome;
});

const soIdade = pessoas.map((obj) => {
    // delete obj.nome;
    // return obj;
    return obj = {
        idade: obj.idade
    };
});

const comId = pessoas.map((obj, i) => {
    const short = require('short-uuid');
    // obj.id = short.generate(); // altera o objeto original
    // return obj;

    const nObj = {...obj}; // não altera o array original
    nObj.id = short.generate();
    return nObj;
});


console.log(soNome);
console.log(soIdade);
console.log(comId);
console.log(pessoas);
