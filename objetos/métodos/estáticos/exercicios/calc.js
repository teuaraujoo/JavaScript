const Calculadora = {
    soma(a, b){
        if (typeof a !== 'number' || typeof b !== 'number'){
            throw new TypeError('Número inválido');
        }
        return a + b;
    },
    subtracao(a, b){
        if (typeof a !== 'number' || typeof b !== 'number'){
            throw new TypeError('Número inválido');
        }
        return a - b;
    }
};

const num1 = 10;
const num2 = 20;


try {
    console.log(Calculadora.soma(num1, num2));
    console.log(Calculadora.subtracao(num1, num2));
} catch(e){
    console.log('Digite um número válido');
}
