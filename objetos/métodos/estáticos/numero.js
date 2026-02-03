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

Numero.isPotive = (number) => {
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

const exibir = {
    resultado(){
        if (!Numero.isNumber(num)){
            console.log('Número inválido');
            return;
        };
        console.log(Numero.isNumber(num));
        console.log(`O número é ${Numero.isPotive(num)} e ${Numero.parOuImpar(num)}`);
    }
};

exibir.resultado()