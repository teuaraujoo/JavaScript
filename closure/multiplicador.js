function criaMultiplicador(valorIncial){

    function multiplica(fator){

        valorIncial *= fator;
        return valorIncial;
    };

    return multiplica;
};

const multiplicacao = criaMultiplicador(2);
console.log(multiplicacao(40));