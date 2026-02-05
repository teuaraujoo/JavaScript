// CONSTRUTOR
function Numero(valor) {
    this.valor = valor;
}

// MÉTODOS ESTÁTICOS

Numero.isNumber = (valor) => {
    return typeof valor === "number";

    // if (typeof valor !== 'number' || isNaN(valor)) {
    //     return 'número inválido';
    // };

    // return 'número válido';
}

Numero.isPositive = (number) => {
    if (number < 0) {
        return 'negativo';
    } else if (number === 0) {
        return 'neutro'
    };

    return 'positivo';
}

Numero.parOuImpar = (valor) => {
    if (valor % 2 === 0) {
        return 'par';
    } else {
        return 'ímpar';
    }
}

const num = -11;

// EXIBIÇÃO
const exibir = {
    resultado(){
        if (!Numero.isNumber(num)){
            console.log('Número inválido');
            return;
        };
        console.log(Numero.isNumber(num));
        console.log(`O número é ${Numero.isPositive(num)} e ${Numero.parOuImpar(num)}`);
    }
};

exibir.resultado()

// Prototypes
// Prototype chain (cadeia de protótipos) -> Processo de busca do(s) método(s)
Numero.prototype.validar = function () {
    return Numero.isNumber(this.valor);
}

Numero.prototype.descricao = function(){
    if (!Numero.isNumber(this.valor)){
        return 'Numero inválido'
    }

    return `O valor é ${Numero.isPositive(this.valor)} e ${Numero.parOuImpar(this.valor)}`;
}

const n1 = new Numero(30);
const n3 = new Numero("dwa");
console.log(n3.validar())
console.log(n1.validar());
console.log(n1.descricao());


console.log(Numero.prototype)
console.log(n1.__proto__)