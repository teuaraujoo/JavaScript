function validarIdade(idade, idadeMinima = 18){

    function validacao(){
        return idade >= idadeMinima ? true : false;
    };
    return validacao();
};

const situacaoIdade = validarIdade(14);


try {
    if (!situacaoIdade){
        throw new RangeError('Indivíduo de menor!');
    };
    console.log(situacaoIdade);
} catch (e){
    console.log(e.message);
};