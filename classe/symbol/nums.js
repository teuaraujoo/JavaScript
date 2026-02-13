const qtd = Symbol('descricao');
class ColecaoNumeros {
    constructor(array) {
        this.array = array;
        this[qtd] = 0;
    }

    adicionarNumeros(valor) {
        this.array.push(...valor);
        this[qtd] = this.array.length;
    }
}

const n1 = new ColecaoNumeros([1, 2, 34, 4, 5, 6]);
console.log(n1);
n1.adicionarNumeros([1, 2, 3, 0, 65, 1]);
console.log(n1);