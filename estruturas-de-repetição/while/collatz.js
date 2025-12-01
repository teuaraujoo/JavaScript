//  é um problema matemático onde se aplica uma regra simples a um número inteiro positivo: se o número for par, divida-o por 2; se for ímpar, multiplique-o por 3 e some 1. A "conjectura" é que, independentemente do número inicial, essa sequência sempre chegará ao número 1.

let n = Number(prompt('Digite um número:'));
let valor = [];
valor.push(n);

while (n !== 1) {
    if (n % 2 === 0){
        n = n / 2
    } else {
        n = n * 3 + 1
    }
    valor.push(n);
}

alert(valor);
console.log(valor);