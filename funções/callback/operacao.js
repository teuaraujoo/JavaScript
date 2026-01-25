function calcular(a, b, operacao){
    return operacao(a, b);
}

function operacao(a, b){
    return a + b;
}

const soma = (a, b) => { return a + b};
const sub = (a, b) => { return a - b};

console.log(calcular(10, 20, soma));
console.log(calcular(10, 20, sub));
console.log(calcular(120, 20, (a, b) => {
    return a + b;
}));
console.log(calcular(5, 15, operacao))


// 

function dividir(a, b, sucesso, error){

    return b === 0 ? error() : sucesso(a, b);
};

function sucesso(a, b){
    return `Resultado: ${a / b}`;
};

function error(){
    return 'Impossível dividir por 0';
};

console.log(dividir(10, 2, sucesso, error));
console.log(dividir(10, 0, sucesso, error));