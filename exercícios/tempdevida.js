function converte(valor){
    return Number(valor.replace(',', '.'));
}

let cigarrosPorDia = converte(prompt('Quantos cigarros você fuma por dia?'));
let anosFumando = converte(prompt('Há quantos anos você fuma?'));

let anosParaDias = anosFumando * 365;
let qCigarros = cigarrosPorDia * anosParaDias;
let qCigarrosMin = qCigarros * 10;
let anosDeVida = qCigarrosMin / 1440;

alert(`Você perdeu ${anosDeVida.toFixed(2)} dias de vida`);