/*
Crie uma função chamada analisarNumeros() que receba vários números e contenha funções internas para:

Calcular a soma
Calcular a média
Encontrar o maior valor
Encontrar o menor valor
Contar quantos são pares
*/

const analisarNumeros = (...valores) => {

    let soma;
    let maior = -Infinity;
    let menor = Infinity;

    const somar = val => {
        soma = val.reduce((a, b) => a + b, 0);
        return soma;
    }

    const calcularMedia = val => {
        return soma / val.length;
    }

    const encontrarMaior = val => {
        for (v of val){
            v > maior ? maior = v : maior = maior;
        }
        return maior;
    }

    const encontrarMenor = val => {
        for (v of val){
            v < menor ? menor = v : menor = menor;
        }
        return menor;
    }

    const par = val => {
        return val.filter(v => v % 2 === 0);
    }

    const impar = val => {
        return val.filter(v => v % 2 === 1);
    }

    let somaCalculada = somar(valores);
    let media = calcularMedia(valores);
    let maiorValor = encontrarMaior(valores);
    let menorValor = encontrarMenor(valores);
    let impares = impar(valores);
    let pares = par(valores);

    const obj = {
        somaCalculada,
        media,
        pares,
        impares,
        maiorValor,
        menorValor
    }

    return obj;
}

console.log(analisarNumeros(1, 2, 3, 4, 5, 6));