function converte(valor){
    return Number(valor.replace(',', '.'));
}

let sal = converte(prompt('Digite o seu salário atual:'));
let aumento = (sal * 0.15) + sal;

alert(`Você recebeu um aumento de 15%, agora o seu salário vale ${aumento.toFixed(2)}`);