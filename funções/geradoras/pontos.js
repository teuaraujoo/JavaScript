const numeroAleatorio = () => {
    return Math.floor(Math.random() * (100 - 1) + 1);
}

function* pontos(){
    let i = 0;

    while (true){
        yield i += 10;
    }
}

const pontuacao = pontos();
const aleatorio = numeroAleatorio();

let i = 1;
let a = 0;
let qtdPontos = 0;

while (i < 11) {
    if ( i === 1){
        alert('BEM VINDO AO PROGRAMA ADVINHA, VOCÊ TÊM 10 TENTATIVAS');
        alert('APENAS NÚMEROS INTEIROS SÃO VÁLIDOS');
    }

    let ale = numeroAleatorio();
    let num = Number(prompt("Digite um número:"));

    if (!Number.isInteger(num)){
        alert('NUMERO INVÁLIDO, DIGITE UM NÚMERO INTEIRO');
        continue;
    }

    if(num != ale){
        alert(`Você errou, o número era: ${ale}, tente novamente`);
        i++;
    } else {
        alert('VOCÊ ACERTOU, + 10 PONTOS');
        qtdPontos += pontuacao.next().value;
        a++;
        i++;
    }
}

alert(`RESULTADOS: Você acertou ${a} vezes e ganhou ${qtdPontos} pontos`);