function toBoolean(input){
    return ["sim", "s", "S", "SIM", "si", "SI"].includes(input.toLowerCase());
}

function converte(valor) {
    return Number(
        valor
        .replace("R$", "") 
        .replace("r$", "")
        .replace(/\s+/g, "")
        .replace(/\./g, "")
        .replace(",", ".")
    );
}

let valor = converte(prompt('Digite o valor da compra:'));
let idade = Number(prompt('Digite sua idade:'));
let cartao = toBoolean(prompt('Possui cartão?(sim/não)'));
let saldo = converte(prompt('Saldo na conta:'));

if (idade >= 18 && saldo > valor && cartao === true){
    alert('COMPRA AUTORIZADA');
}else {
    alert('COMPRA NEGADA');
}