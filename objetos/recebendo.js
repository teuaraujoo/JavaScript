function recebeInfo (nome, idade){
    nome = 'Mateus';
    idade = 17;
    
    const aluno = {
        nome: nome,
        idade: idade
    }

    return aluno;
}

console.log(`O aluno ${recebeInfo().nome} tem ${recebeInfo().idade} anos.`);
