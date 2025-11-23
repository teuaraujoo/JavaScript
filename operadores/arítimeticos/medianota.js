function converteN(valor) {
    // Substitui vírgula por ponto e converte para número
    return Number(valor.replace(',', '.'));
}

let n1 = converteN(prompt('Digite sua 1° nota:'));
let n2 = converteN(prompt('Digite sua 2° nota:'));
let n3 = converteN(prompt('Digite sua 3° nota:'));
let n4 = converteN(prompt('Digite sua 4° nota:'));

const media = (n1 + n2 + n3 + n4) / 4;
const mediaA = media.toFixed(1);

if (media >= 6) {
    alert('Você passou! Parabéns');
    alert('Sua média foi ' + mediaA);
} else if (media < 6) {
    alert('Você reprovou seu burro kkkkkkk');
    alert('Sua média foi ' + mediaA + ', que MERDA!');
}