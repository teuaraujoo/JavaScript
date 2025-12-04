function potencia (a, b){
    if (b === 0){
        return 1;
    } else if (b === 1){
        return a;
    } else {
        let calc = a ** b;
        return calc;
    }
}

function converte(valor){
    return Number(valor.replace(',', '.'));
}

let num1 = converte(prompt('Digite a base:'));
let num2 = converte(prompt('Digite o expoente'));


alert(`O resultado de ${num1}^${num2} é: ${potencia(num1, num2)}`);