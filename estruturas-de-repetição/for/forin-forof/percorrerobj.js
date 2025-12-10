const aluno = {
    nome: "Mateus",
    idade: 17,
    nota: 9.5
};

// -------------------------------------------
// comparação arr
let chaves = Object.keys(aluno);
console.log(chaves); //array = [ 'nome', 'idade', 'nota' ]

for (i = 0; i < chaves.length; i++){
    console.log(chaves[i]);
}

for (i in chaves){
    console.log(chaves[i]);
}
// -------------------------------------------

// -------------------------------------------
// comparacao obj
console.log(aluno.nome);
console.log(aluno.idade);
console.log(aluno.nota);

for(v in aluno){
    console.log(`${v}: ${aluno[v]}`);
}
//  --------------------------------------------

const pessoas = [
    { nome: "Ana", idade: 20 },
    { nome: "João", idade: 25 },
    { nome: "Lara", idade: 30 }
];

for (v of pessoas){
    console.log(v.nome);
}

const produtos = {
    arroz: 20,
    feijao: 12,
    macarrao: 8,
    carne: 35
};

let soma = 0;

for (p in produtos){
    soma += produtos[p];
    console.log(`${p}: ${produtos[p]}`);
}

console.log(`valor da soma: ${soma}`);