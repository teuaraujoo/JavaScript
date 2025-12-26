function validacao(cpf){

    // organização cpf (sem formatação)
    cpf = cpf.replace(/\D/g, '');
    
    let resto1 = 0;
    let resto2 = 0;
    let todosIguais = true;

    // verificacao de quant de numeros
    if (cpf.length !== 11){
        return false;
    };

    // verificacao de numeros
    for (i = 1; i < cpf.length; i++){
        if(cpf[0] != cpf[i]){
            todosIguais = false;
            break;
        };
    };
    if(todosIguais) return false;

    // verificador 1 
    for (i = 0; i < 9; i++){
        resto1 += parseInt(cpf[i]) * (10 - i);
    };

    resto1 = (resto1 * 10) % 11;  
    if (resto1 === 10){
        resto1 = 0;
    };

    // verificador 2
    for (i = 0; i < 10; i++){
        resto2 += parseInt(cpf[i]) * (11 - i);
    };

    resto2 = (resto2 * 10) % 11;
    if (resto2 === 10){
        resto2 = 0;
    };

    // comparação dos verificadores 
    if (cpf[9] != resto1 || cpf[10] != resto2){
        return false
    };

    return true;
};

