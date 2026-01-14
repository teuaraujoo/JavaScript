const precos = [10, 25, 50];

let formatacao = precos.map((p) => {

    p = `R$ ${p},00`;
    return p;
});


console.log(formatacao);