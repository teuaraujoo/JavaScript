let soma = 0;
let num = 0;

do {
    num = Number(prompt('Digite um número:'));
    soma = soma + num;
} while (num != 0);

console.log(soma);