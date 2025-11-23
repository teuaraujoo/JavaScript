function converterNumero(valor) {
    // Substitui vírgula por ponto e converte para número
    return Number(valor.replace(',', '.'));
}

let peso = converterNumero(prompt('Digite seu peso: '));
let altura = converterNumero(prompt('Digite sua altura em metros(ex: 1,70):'));

const IMC = peso / (altura ** 2);
const imcArredondado = IMC.toFixed(2);

alert('Seu IMC: ' + imcArredondado);
