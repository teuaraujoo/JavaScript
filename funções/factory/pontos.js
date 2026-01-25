function criarJogador(nome){
    return {
        nome,
        pontos: 0,
        get ganharPontos(){
            return this.pontos += 10;
        },
        get perderPontos(){
            return this.pontos -= 10;
        }
    };
};

const player1 = criarJogador('Mateus');

player1.ganharPontos;
player1.ganharPontos;
player1.ganharPontos;
player1.ganharPontos;
player1.ganharPontos;
console.log(player1.pontos);