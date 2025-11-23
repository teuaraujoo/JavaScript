function converte(valor){
    return Number(valor.replace(',', '.'));
}

let Celsius = converte(prompt('Digite a temperatura em Graus Celsius:'));
let Fah = (Celsius * 9/5) + 32;

alert(`Essa temperatura em Graus Fahrenheit é: ${Fah}`);