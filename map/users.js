const usuarios = [
    { nome: 'Mateus', idade: 18 },
    { nome: 'Ana', idade: 22 },
    { nome: 'João', idade: 30 }
];

let nomes = usuarios.map((e, i) => {

    e = {
        id: i + 1,
        nome: e.nome,
        anoNascimento: new Date().getFullYear() - e.idade,
    };

    return e;
});

console.log(nomes);
