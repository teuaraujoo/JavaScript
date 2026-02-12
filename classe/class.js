class Pessoa {
    constructor (nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }   

    executa() {
        console.log('opaaaa')
    }
}

const p = new Pessoa('Mateus', 'Araujo');
console.log(p);