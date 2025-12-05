const aluno = {
    nome: 'Mateus',
    idade: 17,
    nota: 10
}

console.log(`Nome do aluno: ${aluno.nome}`);
console.log(`Nome do aluno: ${aluno["nome"]}`);
console.log(`Idade do aluno: ${aluno.idade}`);
console.log(`Nota do aluno: ${aluno.nota}`);

aluno.idade = 18;

console.log(aluno.idade);