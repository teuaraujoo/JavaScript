function mensagem(nome){
    console.log('Olá, ' + nome);
};

function inputName(callback){
    const nome = 'Mateus';
    callback(nome);
};
inputName(mensagem)
