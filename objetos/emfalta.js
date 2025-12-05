// Uma loja possui alguns produtos e querem saber quais estao em falta

const estoque = {
    arroz: 5,
    morango: 1,
    feijao: 2,
    macarrao: 10,
    leite: 1,
    cafe: 1,
    acucar: 8,
    sal: 15,
    oleo: 0,
    farinha: 4,
    tomate: 0,
    cebola: 6,
    batata: 12,
    cenoura: 3,
    pao: 20,
    manteiga: 7
};

// for...in -> tipo especial de laço usado para percorrer as chaves de um objeto.

function emFalta (){
    let faltando = [];
    for (const produto in estoque){
        if (estoque[produto] === 0)
            faltando.push(produto);
    } 
    return faltando;
}

function quaseFalta (){
    let faltando = [];
    for (const produto in estoque){
        if (estoque[produto] > 0 && estoque[produto] <= 3)
            faltando.push(produto);
    }
    return faltando;
}

console.log('Produtos em falta:', emFalta());
// console.log('Produtos em falta:' + emFalta()); -> concatenação
// console.log(`Produtos quase acabando: ${quaseFalta()}`); -> interpolação
console.log("Produtos quase acabando:",  quaseFalta());

// objetos e arrays são exibidos de forma interativa e inspecionável no console do navegador, em vez de serem convertidos para uma string.

/*
let arr = [1 , 2, 3, 4, 5];
console.log('teste', arr);
*/

// concatenar -> juntar strings
// interpolar -> exibir expressões dentro de uma string literal ${}