function mostrarValor(valor, callback){
    callback(valor);
};

function callback(valor){
    console.log(valor);
};

mostrarValor(10, callback)
