function cadastraUser(nome, callback){

    if (nome.length <= 3){
        callback('Digite um nome válido');
        throw new Error('Nome inválido');
    } else {
        return callback('Nome válido');
    };
};

try {
    cadastraUser('Mat', (msg) => {
        console.log(msg);
    });
} catch (e){
    console.log(e.message);
}


cadastraUser('Mateus', (msg) => {
    console.log(msg);
});
