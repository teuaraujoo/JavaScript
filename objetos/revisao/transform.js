const alunos = [
    { id: 1, nome: "Ana" },
    { id: 2, nome: "Bruno" },
    { id: 3, nome: "Carla" }
];

let id = [];
let nome = [];

alunos.forEach(element => {
    id.push(element.id);
    nome.push(element.nome);
});

const obj = {};

for (i = 0; i < alunos.length; i++){
    obj[id[i]] = nome[i];
}

console.log(obj);