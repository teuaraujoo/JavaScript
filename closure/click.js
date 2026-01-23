function criarClique(){

    let cont = 0;
    return function(){
        cont++;
        return cont;
    };
};

const click = criarClique();
for (let i = 0; i < 10; i++){
    click();
};

console.log(`Quantidade de clicks: ${click() - 1}`);