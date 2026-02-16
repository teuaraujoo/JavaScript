// Você precisa de uma propriedade interna diferente quando:

// Getter e setter têm o mesmo nome da propriedade pública
// Você precisa armazenar o valor real em outro lugar
// Quer evitar recursão

const _velocidade = Symbol('velocidade')
class Carro {
    constructor(nome) {
        this.nome = nome;
        this._velocidade = 0;
    }

    get velocidade() {
        return this._velocidade;
    }

    set  velocidade(valor) {
        if (typeof valor !== 'number') return;
        if (valor >= 100 || valor <= 0) return;
        this._velocidade = valor;
    }

    acelerar() {
        if (this._velocidade >= 100) {
            return;
        }
        this._velocidade++;
    }

    freiar() {
        if (this._velocidade <= 0) {
            return;
        }
        this._velocidade--;
    }
}

const c1 = new Carro('cybertruck');

c1.velocidade = 10;
console.log(c1.velocidade);