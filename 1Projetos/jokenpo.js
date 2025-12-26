// pedra/papel/tesoura receber diverosos "parametros" (ex: 'pedra', 'p'....);
// sortear a joga da máquina

/* condições:
1. Pedra ganha de tesoura
2. tesoura ganha de papel
3. papel ganha de pedra
*/

// ROCK -> PEDRA
// PAPER -> PAPEL 
// SCISSORS -> TESOURA 

// pedra ganha de tesoura 
// tesoura ganha de papel
// papel ganha de pedra

// alert('BEM VINDO AO JOGO DA VELHA, 3 PONTOS PARA GANHAR');
// alert('ROCK -> PEDRA / PAPER -> PAPEL / SCISSORS -> TESOURA');

function jogo(){

    function sortearJogada(){
        const caracteres = ['R', 'S', 'P'];
        return caracteres[Math.floor(Math.random() * caracteres.length)];
    }

    // const jogada = prompt('Digite sua tentativa (R/P/S)').toUpperCase();
    const jogada = 'P';
    const ale = sortearJogada();

    function decidirVencedor(){

        if (ale === jogada) return 'EMPATE';

        const ganhou = (jogada === 'P' && ale === 'R') || (jogada === 'S' && ale === 'P') || (jogada === 'R' && ale === 'S');

            return ganhou ? `Você ganhou! JOGADA DA MÁQUINA -> ${ale}` : `Você perdeu JOGADA DA MÁQUINA -> ${ale}`;
    }
    return decidirVencedor();
}
console.log(jogo());