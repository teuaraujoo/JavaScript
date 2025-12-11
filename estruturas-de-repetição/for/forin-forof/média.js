const turma = {
    aluno1: { nome: "Ana", notas: [7, 8, 9] },
    aluno2: { nome: "João", notas: [6, 6, 8] },
    aluno3: { nome: "Lara", notas: [9, 10, 9] }
};

let maiorMedia = 0;
let melhorAluno = "";

for (alunos in turma){

    let notas = turma[alunos].notas; // notas virou [7, 8, 9]
    let soma = 0;

    for (nota of notas){ // para cada valor dentro de notas (of pega os valores)
        soma += nota;
    }

    let media = soma / notas.length;

    if (media > maiorMedia){
        maiorMedia = media
        melhorAluno = turma[alunos].nome;
    }
}

console.log(`O aluno com a maior média é ${melhorAluno} com média ${maiorMedia.toFixed(2)}.`);