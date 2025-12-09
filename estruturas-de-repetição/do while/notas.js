let notas;
let soma = 0;
let i = 0;
let media;

do {
    notas = Number(prompt('Digite sua nota:'));
    if (notas >= 0){
        soma = soma + notas;
        i++;
    }
} while (notas >= 0){
    alert('FIM..');
    media = (soma/i).toFixed(2);
}

console.log(`Média de todas as notas digitadas: ${media}`);