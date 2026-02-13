const ativa = Symbol('descricao');
class SessaoUsuario {
    constructor(nome) {
        this.nome = nome;
        this[ativa] = true;
    }

    encerrarSessao() {
        this[ativa]= false; // métodos que execcutam ação, geralmente, nao irão retornar nada
    }

    estaAtiva() {
        if (this[ativa]) {
            return 'Ativa';
        } else {
            return 'Desativaada';
        }
    }
}

const t1 = new SessaoUsuario('Mateus');
console.log(t1);