function convertNum(value){

    try {

        const numero = Number(value);

        if (Number.isNaN(numero)){
            throw new TypeError('Valor não é um número');
        };
        return numero;
    } catch (error) {
        console.log(error);
        return null;
    };
};

console.log(convertNum('5dawda235'));