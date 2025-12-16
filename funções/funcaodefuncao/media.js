const mediaAluno = (...valores) => {

    const somar = val => {
        return val.reduce((x, Y) => x + Y, 0);
    }

    const calcularMedia = soma => {
        return soma / valores.length
    }

    let soma = somar(valores);
    let media = calcularMedia(soma);

    return media;
}

console.log(mediaAluno(10, 10, 10, 1));