function converte(valor){
    return Number(valor.replace(',', '.'));
}

let num1 = converte(prompt('Digite um número:'));
let num2 = converte(prompt('Digite um número:'));

let div = num1 / num2;
let resto = num1 % num2;

alert(`Valor da divisão: ${div.toFixed(2)}`);
alert(`Resto da divisão: ${resto}`);
