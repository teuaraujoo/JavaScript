function Pessoa(nome, cpf){
    Object.defineProperties(this, {
        cpf: {
            enumerable: false,
            value: cpf,
            writable: false,
            configurable: false
        }, 
        nome: {
            enumerable: true,
            value: nome,
            writable: false,
            configurable: false
        }
    });
};

const p1 = new Pessoa('Mateus Araujo', '111.222.333-44');
console.log(p1);
console.log(Object.keys(p1));