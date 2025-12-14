function saudacao(){
    return console.log('Olá, Mundo!');
}

function despedida(){
    return console.log('Tchau, Mundo!');
}

function numero(){
    return console.log(10);
}

const arrFuncoes = [saudacao, despedida, numero];

const funcoesOrdem = arr => arr.map(f => f());

funcoesOrdem(arrFuncoes);