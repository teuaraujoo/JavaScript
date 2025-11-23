function converte(valor){
    return Number(valor.replace(',', '.'));
}

function numAleatorio(a, b){
    return Math.floor(Math.random() * (b - a + 1)) + a
}

let produto = converte(prompt('Valor do produto:'));
let desconto = (produto * 0.90);
let cod = numAleatorio(0, 9999);

alert(`Você recebeu um desconto de 10%, agora o valor da compra é ${desconto}`);
alert(`Aplique esse código de desconto: ${cod}`);