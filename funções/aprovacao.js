alert('BEM VINDO A ÁREA DO ALUNO');

nome = prompt('Digite seu nome:');

alert(`BEM VINDO, ${nome}, AGORA VOCÊ IRÁ DIGITAR SUAS 4 NOTAS`);

nota = [];

for (i = 0; i < 4; i++){

    nota[i] = Number(prompt(`Digite sua ${i + 1}° nota`));

    if(isNaN(nota[i]) || nota[i] >= 11 || nota[i] < 0){
        alert('NÚMERO INVÁLIDO');
        i--;
        continue;
    }
}
const media = (nota[0] + nota[1] + nota[2] + nota[3]) / 4;

if (media >= 6){
    alert(`A sua média foi: ${media}`);
    alert(`Você passou ${nome}, Parabéns!`);
} else {
    alert(`A sua média foi: ${media}`);
    alert('SEU BURRO, REPROVOU OTÁRIO KKKKKK');
}