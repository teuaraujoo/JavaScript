const turma = {
    aluno1: [7, 8, 9],
    aluno2: [6, 10, 9],
    aluno3: [9, 9, 10],
    aluno4: [8, 7, 6]
};

let maiorMedia = 0;
let melhorAluno = "";

for (alunos in turma){

    let notas = turma[alunos]; // notas virou [7, 8, 9]
    let soma = 0;

    for (nota of notas){ // para cada valor dentro de notas (of pega os valores)
        soma += nota;
    }

    let media = soma / notas.length;

    if (media > maiorMedia){
        maiorMedia = media
        melhorAluno = alunos;
    }
}

console.log(`O aluno com a maior média é ${melhorAluno} com média ${maiorMedia.toFixed(2)}.`);