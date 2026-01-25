function validarIdade(idade, callback){
    return callback(idade);
};

function validacao(idade){
    return idade >= 18 ? 'Acesso permitido' : 'Acesso negado';
};

console.log(validarIdade(18, validacao));


// ou


function validarIdade(idade, callback){
    return idade >= 18 ? callback('Acesso Permitido') : callback('Acesso Negado');
};

console.log(validarIdade(15, (msg) => {
    console.log(msg);
}));
