function mensagemPersonalizada(nome){

    return {
        saudar(){
            return 'Olá ' + nome + '!';
        }, 
        boaVindas(){
            return 'Boas vindas, ' + nome
        },
        login(){
            return nome + ', seu login foi realizado com sucesso!'
        }
    };
};

const mensagem = mensagemPersonalizada('Mateus');

console.log(mensagem.saudar());
console.log(mensagem.boaVindas());
console.log(mensagem.login());