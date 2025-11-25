function converte(valor){
    return Number(valor.replace(',', '.'));
}

let num = converte(prompt('Digite um número:'));

if(num >= 10 && num <=20){
    alert('Numero entre 10 e 20');
} else if (num > 20){
    alert('Numero maior que 20');
} else {
    alert('Numero menor que 10')
}
