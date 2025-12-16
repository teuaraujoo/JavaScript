const somaPositivos = (...valores) => {

    const soma = val => {
        const filtro = val.filter(v => v > 0);
        return filtro.reduce((a, b) => a + b, 0);
    }

    return soma(valores);
}

console.log(somaPositivos(-1, 1, -2, 2, -5, 6));