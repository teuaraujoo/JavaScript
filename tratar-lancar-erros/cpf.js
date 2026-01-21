function simpleCPFValidation(cpf){

        if (!cpf){
            throw ReferenceError('CPF não informado!');
        };

        if (cpf.length !== 11){
            throw RangeError('Tamanho de CPF inválido');
        };

        return true;
};

try {
    simpleCPFValidation('12345678910');
    console.log('CPF Válido');
} catch (e) {
    console.log(e);
};
